const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('../frontend')); // Serve frontend

mongoose.connect('mongodb://localhost:27017/hospital-management', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const Patient = require('./models/Patient');
const Doctor = require('./models/Doctor');
const Appointment = require('./models/Appointment');

// Endpoints for adding patients, doctors, and appointments
app.post('/api/patient', async (req, res) => {
    const { name, age, contact } = req.body;
    const patient = new Patient({ name, age, contact });
    await patient.save();
    res.json(patient);
});

app.post('/api/doctor', async (req, res) => {
    const { name, specialization, contact } = req.body;
    const doctor = new Doctor({ name, specialization, contact });
    await doctor.save();
    res.json(doctor);
});

app.post('/api/appointment', async (req, res) => {
    const { patient, doctor, date } = req.body;
    const appointment = new Appointment({ patient, doctor, date });
    await appointment.save();
    res.json(appointment);
});

app.listen(port, () => {
    console.log(Server running at http://localhost:${port});
});