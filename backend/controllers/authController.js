const bcrypt = require('bcryptjs');
const User = require('../models/User');
const UserProfile = require('../models/UserProfile');
const Course = require('../models/Course');
const mongoose = require('mongoose');

const register = async (req, res) => {
    try {
        const {
            firstname,
            lastname,
            email,
            username,
            password,
            university
        } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);
        const objectID = new mongoose.Types.ObjectId();

        const newUser = new User({
            objectID,
            username,
            courses: []
        });

        const newUserProfile = new UserProfile({
            objectID,
            firstname,
            lastname,
            email,
            username,
            password: hashedPassword,
            university
        });

        await newUser.save();
        await newUserProfile.save();

        res.status(201).json({ message: 'User registered successfully', username });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to register user' });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const userProfile = await UserProfile.findOne({ username });
        if (!userProfile || !(await bcrypt.compare(password, userProfile.password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful', user: userProfile });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

const getUserProfileByUsername = async (req, res) => {
    const { username } = req.params;
    try {
        const profile = await UserProfile.findOne({ username });
        if (!profile) return res.status(404).json({ error: 'UserProfile not found' });
        res.status(200).json(profile);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

const getAllUsers = async (req, res) => {
    try {
      const users = await UserProfile.find({});
      if (!users || users.length === 0) {
        return res.status(404).json({ error: 'No users found' });
      }
      res.status(200).json(users);
    } catch (err) {
      console.error('Error fetching users:', err);
      res.status(500).json({ error: 'Server error' });
    }
  };

const getUserByUsername = async (req, res) => {
    const { username } = req.params;
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

const addCourseToUser = async (req, res) => {
    const { username } = req.params;
    const { course } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(404).json({ error: 'User not found' });

        if (!course) return res.status(400).json({ error: 'Course is required' });

        if (user.courses.includes(course)) {
            return res.status(400).json({ error: 'Course already added' });
        }

        user.courses.push(course);
        await user.save();

        res.status(200).json({ message: 'Course added successfully', courses: user.courses });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

const addCourse = async (req, res) => {
    const { coursename, courseId, university } = req.body;

    if (!coursename || !courseId || !university) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const existing = await Course.findOne({ courseId });
        if (existing) {
            return res.status(409).json({ error: 'Course ID already exists' });
        }

        const course = new Course({
            objectID: new mongoose.Types.ObjectId(),
            coursename,
            courseId,
            university
        });

        await course.save();
        res.status(201).json({ message: 'Course added successfully', course });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to add course' });
    }
};

const updateCourse = async (req, res) => {
    const { courseId } = req.params;
    const { coursename, university } = req.body;
  
    try {
      const course = await Course.findOne({ courseId });
  
      if (!course) {
        return res.status(404).json({ error: 'Course not found' });
      }
  
      if (coursename) course.coursename = coursename;
      if (university) course.university = university;
  
      await course.save();
  
      res.status(200).json({ message: 'Course updated successfully', course });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to update course' });
    }
  };
  
  const getAllCourses = async (req, res) => {
    try {
      const courses = await Course.find();
      res.json(courses);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch courses' });
    }
  };

module.exports = {
    register,
    login,
    getUserProfileByUsername,
    getUserByUsername,
    addCourseToUser,
    addCourse,
    updateCourse,
    getAllCourses,
    getAllUsers
};