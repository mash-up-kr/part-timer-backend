const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  totalSalary: { type: String, required: true },
});

userSchema.statics.findOneByUserId = function find(id) {
  return this.findOne({ id });
};

module.exports = mongoose.model('user', userSchema);
