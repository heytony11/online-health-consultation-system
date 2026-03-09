const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    specialization:{
        type:String
    },

    experience:{
        type:String
    },

    availability:{
        type:String
    },

    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    approved:{
        type:Boolean,
        default:false
    }

});

module.exports = mongoose.model("Doctor",doctorSchema);