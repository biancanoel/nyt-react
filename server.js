const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const http = require('http');
const socket = require('socket.io');




// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);
app.use(express.static('public'))


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nyt-react-articles");


var server = app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

//Socket set up on server
const io = socket(server)
//when theres a connection w a browswer, fire the function
io.on('connection', function (socket){
    console.log(`made socket connection`, socket.id)

    //on socket betweeen client and server, when a chat is sent from client (the data)
  socket.on('chat', function (data){
    //send (emit) the data as a chat message to all  sockets so others can see the chat
    io.sockets.emit('chat', data)
    console.log(data);
  })
  
})