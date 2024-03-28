// routes/reportRoutes.js

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    id: Number,
    name:String,
    phone:Number,
    vehicles:String
  });
  

const Report = mongoose.model('Driver', driverSchema);

// Get all reports

router.get('/', async (req, res) => {
  try {
    const chargers = await Report.find();
    res.json(chargers);
  } catch (error) {
    console.error("Error fetching chargers:", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
