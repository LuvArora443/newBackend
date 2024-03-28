// models/Report.js

const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    licenseType: String,
    make: String,
    vin: String,
    model: String,
    type: String,
    date: String, // Or you can use Date type if you want to store dates as Date objects
    milesDriven: Number
  });
  

module.exports = mongoose.model('Report', reportSchema);
