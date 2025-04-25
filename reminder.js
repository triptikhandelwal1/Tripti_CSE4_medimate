const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
    medicine: String,
    time: String,
    notes: String,
    date: Date
});

module.exports = mongoose.model('Reminder', reminderSchema);
