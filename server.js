const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const server = app.listen(process.env.PORT,()=>{
    console.log("server running on :"+process.env.PORT);
})

const io = require('socket.io')(server,{
    pingTimeout:6000,
    cors:{
        origin: process.env.CLIENT_URL
    }

})

let users=[];
io.on("connection",function(socket){
    // console.log("user connected on :",socket.id);

    socket.on("useInput",function(data){
        console.log("userval "+ data.message);
        socket.broadcast.emit("user_msg",data.message)
    })
    socket.on("joinRoom",(data)=>{
        console.log(data);
        socket.join("room",data.roomId);
        users.push(data.name)
        socket.emit("users",users);
    })
    // socket.send("welcome to socket");

    socket.on("disconnect",function(){
        // console.log("User disconnected :",socket.id);
    })
});

