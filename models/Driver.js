// models/Report.js

const mongoose = require('mongoose');

const chargerSchema = new mongoose.Schema({
    id: Number,
    name:String,
    phone:Number,
    vehicles:String
  });
  

module.exports = mongoose.model('Charger', chargerSchema);
