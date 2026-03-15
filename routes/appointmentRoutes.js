const express = require("express");
const router = express.Router();

const Appointment = require("../models/Appointment");
const Doctor = require("../models/Doctor");


/* TEST ROUTE */
router.get("/check", (req, res) => {
    res.send("Appointment route working");
});


/* VIEW DOCTORS */
router.get("/doctors", async (req, res) => {
    try {
        console.log("Fetching doctors...");

        const doctors = await Doctor.find({});

        console.log("Doctors:", doctors);

        res.json(doctors);
    } catch (err) {
        console.error("Error fetching doctors:", err);
        res.status(500).json({ error: "Server Error" });
    }
});


/* BOOK APPOINTMENT */
router.post("/appointment/book", async (req, res) => {
    try {
        const appointment = new Appointment(req.body);

        await appointment.save();

        res.send("Appointment Booked Successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error booking appointment");
    }
});


/* PATIENT APPOINTMENT HISTORY */
router.get("/appointment/patient/:id", async (req, res) => {
    try {
        const appointments = await Appointment.find({
            patientId: req.params.id
        });

        res.json(appointments);
    } catch (err) {
        res.status(500).send(err);
    }
});


/* DOCTOR APPOINTMENT REQUESTS */
router.get("/appointment/doctor/:id", async (req, res) => {
    try {
        const appointments = await Appointment.find({
            doctorId: req.params.id
        });

        res.json(appointments);
    } catch (err) {
        res.status(500).send(err);
    }
});


module.exports = router;