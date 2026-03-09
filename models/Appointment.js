const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({

    patientId:{
        type:String
    },

    doctorId:{
        type:String
    },

    date:{
        type:String
    },

    status:{
        type:String,
        default:"Pending"
    },

    message:{
        type:String
    }

});

module.exports = mongoose.model("Appointment",appointmentSchema);