// models/Charger.js

const mongoose = require('mongoose');

const chargerSchema = new mongoose.Schema({
    id: Number,
    location:String,
    ports:Number,
    capactiy:String
  });
  

module.exports = mongoose.model('Charger', chargerSchema);
