const express = require('express');
const router = express.Router();
const { register, login, getUserByUsername, getUserProfileByUsername, addCourseToUser, addCourse, updateCourse, getAllCourses } = require('../controllers/authController');

router.post('/signup', register);
router.post('/login', login);

router.get('/profile/:username', getUserProfileByUsername);
router.get('/user/:username', getUserByUsername);

router.post('/user/:username/add-course', addCourseToUser);

router.post('/courses/add', addCourse);
router.put('/courses/:courseId', updateCourse);
router.get('/courses/all', getAllCourses);

module.exports = router;
