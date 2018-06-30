const mongoose = require('mongoose');

// Define Schemes
const workHourSchema = new mongoose.Schema({
  month: Number,
  date: [{
    day: Number,
    startTime: Number,
    endTime: Number,
  }],
});

// Find All
workHourSchema.statics.findAll = function findAll() {
  // return promise
  // V4부터 exec() 필요없음
  return this.find({});
};

// Find One by month
workHourSchema.statics.findOneByMonth = function findOneByMonth(month) {
  return this.findOne({ month });
};

// Create Model & Export
module.exports = mongoose.model('WorkHour', workHourSchema);
