// routes/reportRoutes.js

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    licenseType: String,
    make: String,
    vin: String,
    model: String,
    type: String,
    milesDriven: Number
  });
  

const Report = mongoose.model('Vehicle', vehicleSchema);

// Get all reports

router.get('/', async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (error) {
    console.log("bleh");
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
