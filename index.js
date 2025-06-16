const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const carRoutes = require("./routes/carRoutes");

const app = express();
let isConnected = false;

app.use(cors());
app.use(express.json());
app.use("/api/cars", carRoutes);

async function connectDB() {
  if (isConnected) return;
  await mongoose.connect(
    'mongodb+srv://upadhyayharshit05:7kBDgfDuNbc0cfIQ@cluster0.jujvf30.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  isConnected = true;
  console.log("Connected to MongoDB");
}

module.exports = async (req, res) => {
  await connectDB();
  return app(req, res);
};
