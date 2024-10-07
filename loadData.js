// loadData.js
const mongoose = require('mongoose');
const Farmer = require('./models/Farmer');
const farmersData = require('./data.json');  // Assuming data.json is in the root folder
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    await Farmer.insertMany(farmersData);
    console.log('Data successfully loaded!');
    mongoose.connection.close();
  })
  .catch(err => console.error(err));
