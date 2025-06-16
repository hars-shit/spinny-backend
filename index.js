const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const carRoutes = require("./routes/carRoutes");
const connectDB = require("./db");

const app = express();
const PORT=5000

app.use(cors());
app.use(express.json());
app.use("/api/cars", carRoutes);

connectDB()

app.listen(PORT,()=>{
    console.log(`APP is Listening to ${PORT}`)
})