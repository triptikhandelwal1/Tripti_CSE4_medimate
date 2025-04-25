const Reminder = require('../models/Reminder');

exports.createReminder = async (req, res) => {
    try {
        const reminder = new Reminder(req.body);
        await reminder.save();
        res.status(201).json(reminder);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getReminders = async (req, res) => {
    try {
        const reminders = await Reminder.find();
        res.json(reminders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
