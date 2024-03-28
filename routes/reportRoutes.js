// routes/reportRoutes.js

const express = require('express');
const router = express.Router();

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
  

const Report = mongoose.model('Report', reportSchema);

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
