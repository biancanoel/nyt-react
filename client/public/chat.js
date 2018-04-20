//Make connection on front end for socket io
var socket = io.connect('http://localhost:3000/')

//Query DOM
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');

//Emit events
btn.addEventListener('click', function () {
    //client emits a message to the server, which is a chat. the message is inside the obj (value insdie the message and handle fields)
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    })
})

//Listen for events