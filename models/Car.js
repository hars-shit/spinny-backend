const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  carNumber: String,
  carModel: String,
  carType: String,
  engine: String,
  year: String,
  sellDate: String,
}, { timestamps: true });

module.exports = mongoose.model('Car', carSchema);
