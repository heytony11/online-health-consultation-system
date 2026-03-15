const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

/* Routes */
app.use("/api", authRoutes);
app.use("/api", appointmentRoutes);

/* MongoDB Connection */
mongoose.connect("mongodb://127.0.0.1:27017/healthDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

/* Test Route */
app.get("/", (req,res)=>{
    res.send("Online Health Consultation System Running");
});

/* Server */
app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});