const path = require('path')
const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)
const Filture = require('bad-words')

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {

  socket.on('abc', ({username, room}) => {
    socket.join(room)
    socket.emit('f', 'Welcome!!')
    socket.broadcast.to(room).emit('f', `${username} has joined the group`)

  })
  socket.on('sendMessage', (message, callback) => {
    const filture = new Filture()

    if (filture.isProfane(message)) {
      return callback('profonaity words are not allowed')
    }
    console.log(message);
    io.emit('f', message)
    callback('!delivered')
  })

socket.on('sendLocation', (coords,callback) => {
  io.emit('a', `https://google.com/maps?q=${coords.Latitude},${coords.Longitude}`)
  console.log(coords);
  callback()
})
})



server.listen(port, () => {
  console.log(`Server is running on ${port}`);
})
