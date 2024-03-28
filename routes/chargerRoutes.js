// routes/chargerRoutes.js

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const chargerSchema = new mongoose.Schema({
    id: Number,
    location: String,
    ports: Number,
    capacity: String
});

const Charger = mongoose.model('Charger', chargerSchema); // Corrected model name

// Get all chargers
router.get('/', async (req, res) => {
  try {
    const chargers = await Charger.find();
    res.json(chargers);
  } catch (error) {
    console.error("Error fetching chargers:", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
