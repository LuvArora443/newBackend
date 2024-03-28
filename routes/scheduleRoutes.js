// routes/reportRoutes.js

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    id: Number,
    name:String,
    phone:Number,
    vehicles:String,
    date:String
  });
  

const Report = mongoose.model('Schedule', scheduleSchema);

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
