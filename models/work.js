const mongoose = require('mongoose');

// Define Schemes
const workSchema = new mongoose.Schema({
  id: Number,
  name: String,
  latitude: String,
  longitude: String,
  hourlyWage: Number,
  payDay: Number,
});

// Find All
workSchema.statics.findAll = function findAll() {
  // return promise
  // V4부터 exec() 필요없음
  return this.find({});
};

// Find One by id
workSchema.statics.findOneById = function findOneById(id) {
  return this.findOne({ id });
};

// Create Model & Export
module.exports = mongoose.model('Work', workSchema);
