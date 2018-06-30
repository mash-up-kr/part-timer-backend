const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  totalSalary: { type: String, required: true },
});

userSchema.statics.findAll = function findAll() {
  return this.find({});
};

userSchema.statics.findOneByUserId = function findOneByUserId(id) {
  return this.findOne({ id });
};

module.exports = mongoose.model('user', userSchema);
