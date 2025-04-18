const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const { Server } = require('socket.io');
const http = require('http');

const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat');
const scheduleRoutes = require('./routes/schedule');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/studysync', authRoutes);
app.use('/studysync/schedule', scheduleRoutes);
app.use('/studysync/chat', chatRoutes);

// HTTP + WebSocket Server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', // 🔐 You can restrict this in production
    methods: ['GET', 'POST']
  }
});

// Socket.IO logic
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('send_message', (data) => {
    // Broadcast to all except the sender
    socket.broadcast.emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// MongoDB connection + server start
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');

    // 🚀 Start server AFTER DB connection is successful
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
