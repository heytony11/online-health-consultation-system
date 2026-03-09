const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Doctor = require("../models/Doctor");


/* Patient Register */

router.post("/patient/register", async(req,res)=>{

    try{

        const user = new User(req.body);

        await user.save();

        res.send("Patient Registered Successfully");

    }catch(err){

        res.send(err);
    }

});


/* Patient Login */

router.post("/patient/login", async(req,res)=>{

    const user = await User.findOne({email:req.body.email});

    if(!user)
        return res.send("User Not Found");

    if(user.password === req.body.password)
        res.send("Login Successful");

    else
        res.send("Invalid Password");

});



/* Doctor Register */

router.post("/doctor/register", async(req,res)=>{

    try{

        const doctor = new Doctor(req.body);

        await doctor.save();

        res.send("Doctor Registered (Waiting for Admin Approval)");

    }catch(err){

        res.send(err);
    }

});



/* Doctor Login */

router.post("/doctor/login", async(req,res)=>{

    const doctor = await Doctor.findOne({email:req.body.email});

    if(!doctor)
        return res.send("Doctor Not Found");

    if(doctor.password === req.body.password)
        res.send("Doctor Login Successful");

    else
        res.send("Invalid Password");

});


module.exports = router;