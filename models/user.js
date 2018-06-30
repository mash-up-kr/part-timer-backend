const mongoose = require('mongoose');

// Define Schemes
const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  totalSalary: Number,
});

// Find All
userSchema.statics.findAll = function findAll() {
  // return promise
  // V4부터 exec() 필요없음
  return this.find({});
};

// Find One by id
userSchema.statics.findOneByUserId = function findOneByUserId(id) {
  return this.findOne({ id });
};

// Create Model & Export
module.exports = mongoose.model('User', userSchema);
