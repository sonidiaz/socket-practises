const express = require('express')
const app = express()

const server = require('http').createServer(app)
const io = require('socket.io')(server)


// desplegar el directorio publico
app.use(express.static(__dirname + '/public'))

io.on('connection', (socket) => {
  socket.emit('mensaje-bienvenida', {
    msg: 'hola mundo',
    date: new Date()
  })

  socket.on('respuesta-cliente', (payload) =>{
    console.log(payload)
  })

  console.log('someone connected!', socket.id);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});