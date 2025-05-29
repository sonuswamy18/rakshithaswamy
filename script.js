let patients = [];
let doctors = [];
const patientSelect = document.getElementById('patientSelect');
const doctorSelect = document.getElementById('doctorSelect');
const appointmentsList = document.getElementById('appointmentsList');
const patientForm = document.getElementById('patientForm');
const doctorForm = document.getElementById('doctorForm');
const appointmentForm = document.getElementById('appointment');

// Add patient
patientForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('patientName').value;
    const age = document.getElementById('patientAge').value;
    const contact = document.getElementById('patientContact').value;

    const patient = { name, age, contact };
    patients.push(patient);
    await updatePatientSelect();
});

// Add doctor
doctorForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('doctorName').value;
    const specialization = document.getElementById('doctorSpecialization').value;
    const contact = document.getElementById('doctorContact').value;

    const doctor = { name, specialization, contact };
    doctors.push(doctor);
    await updateDoctorSelect();
});

// Update select options for patients and doctors
async function updatePatientSelect() {
    patientSelect.innerHTML = '';
    patients.forEach((patient, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = patient.name;
        patientSelect.appendChild(option);
    });
}

async function updateDoctorSelect() {
    doctorSelect.innerHTML = '';
    doctors.forEach((doctor, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = ${doctor.name} - ${doctor.specialization};
        doctorSelect.appendChild(option);
    });
}

// Schedule appointment
appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const patientIndex = patientSelect.value;
    const doctorIndex = doctorSelect.value;
    const date = document.getElementById('appointmentDate').value;

    if (patientIndex && doctorIndex && date) {
        const appointment = {
            patient: patients[patientIndex].name,
            doctor: doctors[doctorIndex].name,
            date
        };
        const listItem = document.createElement('li');
        listItem.textContent = Patient: ${appointment.patient}, Doctor: ${appointment.doctor}, Date: ${new Date(appointment.date).toLocaleString()};
        appointmentsList.appendChild(listItem);
    } else {
        alert('Please select all fields.');
    }
});