import {Server} from "socket.io"
import http from "http"
import express from 'express'


const app = express () ;



const server  = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin:["http://localhost:3000"],
        methods:["GET","POST"]
    }

    
})

const userSoketMap = []    //userId :socketid

export const getReceiverSocketId =(receiverId) =>{

    return userSoketMap[receiverId]
}
io.on("connection",(socket)=>{
    console.log('a user connected',socket.id) 

    const userId = socket.handshake.query.userId
    if(userId != "undefined") userSoketMap[userId] = socket.id ;

    io.emit("getOnlineUsers",Object.keys(userSoketMap))

    socket.on("disconnect",()=>{
        console.log(" user disconnected",socket.id)
        delete userSoketMap[userId]
    io.emit("getOnlineUsers",Object.keys(userSoketMap))

    })
})

export {app,server,io}