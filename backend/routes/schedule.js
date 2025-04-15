const express = require('express');
const router = express.Router();
const { 
    addSchedule, 
    updateSchedule, 
    deleteSchedule, 
    getSchedulesByUsername, 
    signupForSchedule,
    cancelSignup,
    getSchedulesForWeek
} = require('../controllers/scheduleController');

router.post('/add', addSchedule);
router.put('/update/:id', updateSchedule);
router.delete('/:id', deleteSchedule);
router.get('/user/:username', getSchedulesByUsername);

router.post('/:id/signup', signupForSchedule);
router.post('/:id/cancel', cancelSignup);
router.get('/week', getSchedulesForWeek);

module.exports = router;
