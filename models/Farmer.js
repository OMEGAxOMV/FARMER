const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
  id: Number,
  farmer_name: String,
  photo_link: String,
  caption: String,
  category: String,
  location: String,
  phone_number: String,
  email: String
});

module.exports = mongoose.model('Farmer', farmerSchema);
