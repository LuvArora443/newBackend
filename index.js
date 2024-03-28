const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const reportRoutes = require('./routes/reportRoutes');
const chargerRoutes = require('./routes/chargerRoutes');
const driverRoutes = require('./routes/driverRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path")

app.use(cors({
  origin: 'https://newadmin-03hk.onrender.com', // Allow requests from this specific origin
  methods: ['GET', 'POST'], // Allow GET and POST requests
  allowedHeaders: ['Content-Type'], // Allow the Content-Type header
}));
app.use(express.json());
app.use(express.static(path.join(__dirname+"/public")))

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://luvarora2003:luvaroranec2003@cluster0.xcktkps.mongodb.net/ElectrifyIt', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // You can optionally add more options here, such as retryWrites and appName
});

// Routes
app.use('/api/reports', reportRoutes);
app.use('/api/chargers', chargerRoutes);
app.use('/api/drivers', driverRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/vehicles', vehicleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


