const Schedule = require('../models/Schedule');
const mongoose = require('mongoose');

const addSchedule = async (req, res) => {
  const { sessionId, timeFrom, timeTo, courseId, sessionName, note, members } = req.body;

  if (!sessionId || !timeFrom || !timeTo || !courseId || !sessionName) {
    return res.status(400).json({ error: 'All required fields must be provided' });
  }

  try {
    const newSchedule = new Schedule({
      sessionId,
      timeFrom,
      timeTo,
      courseId,
      sessionName,
      note,
      members: members || []
    });

    await newSchedule.save();
    res.status(201).json({ message: 'Schedule added successfully', schedule: newSchedule });
  } catch (err) {
    console.error(err);
    if (err.code === 11000 && err.keyPattern?.sessionId) {
      return res.status(409).json({ error: 'Duplicate sessionId. A session already exists with this ID.' });
    }
    res.status(500).json({ error: 'Failed to add schedule' });
  }
};

const updateSchedule = async (req, res) => {
  const { id } = req.params;
  const { timeFrom, timeTo, courseId, sessionName, note } = req.body;

  try {
    const schedule = await Schedule.findOne({ sessionId: id });
    if (!schedule) {
      return res.status(404).json({ error: 'Schedule not found' });
    }

    if (timeFrom) schedule.timeFrom = timeFrom;
    if (timeTo) schedule.timeTo = timeTo;
    if (courseId) schedule.courseId = courseId;
    if (sessionName) schedule.sessionName = sessionName;
    if (note !== undefined) schedule.note = note;

    await schedule.save();
    res.status(200).json({ message: 'Schedule updated successfully', schedule });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update schedule' });
  }
};

const deleteSchedule = async (req, res) => {
  const { id } = req.params; // here 'id' is the sessionId, not _id

  try {
    const deleted = await Schedule.findOneAndDelete({ sessionId: id });

    if (!deleted) {
      return res.status(404).json({ error: 'Schedule not found' });
    }

    res.status(200).json({ message: 'Schedule deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete schedule' });
  }
};

const getSchedulesByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    const schedules = await Schedule.find({
      $or: [
        { sessionId: { $regex: new RegExp(`-${username}-`) } },
        { members : username },
      ]
    });

    res.json(schedules);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch schedules' });
  }
};

const signupForSchedule = async (req, res) => {
  const { id } = req.params; // sessionId
  const { username } = req.body;

  try {
    const schedule = await Schedule.findOne({ sessionId: id });
    if (!schedule) {
      return res.status(404).json({ error: 'Schedule not found' });
    }

    if (!schedule.members.includes(username)) {
      schedule.members.push(username);
      await schedule.save();
    }

    res.status(200).json({ message: 'Signed up successfully', schedule });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to sign up for session' });
  }
};

const cancelSignup = async (req, res) => {
  const { id } = req.params; // sessionId
  const { username } = req.body;

  try {
    const schedule = await Schedule.findOne({ sessionId: id });
    if (!schedule) {
      return res.status(404).json({ error: 'Schedule not found' });
    }

    schedule.members = schedule.members.filter(u => u !== username);
    await schedule.save();

    res.status(200).json({ message: 'Canceled signup successfully', schedule });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to cancel signup' });
  }
};

const getSchedulesForWeek = async (req, res) => {
  const { from, to } = req.query;

  try {
    const schedules = await Schedule.find({
      timeFrom: { $gte: Number(from), $lt: Number(to) }
    });

    res.json(schedules);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch weekly schedules' });
  }
};

module.exports = {
  addSchedule,
  updateSchedule,
  deleteSchedule,
  getSchedulesByUsername,
  signupForSchedule,
  cancelSignup,
  getSchedulesForWeek
};
