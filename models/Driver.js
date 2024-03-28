// models/Report.js

const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    id: Number,
    name:String,
    phone:Number,
    vehicles:String
  });
  

module.exports = mongoose.model('Driver', driverSchema);
