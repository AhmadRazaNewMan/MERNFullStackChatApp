// import express from 'express'
// import dotenv from 'dotenv'
// import cookieParser from "cookie-parser";
// import path from "path"

// import messageRoutes from "./routes/message.route.js";
// import authRoutes from './routes/auth.routes.js'
// import userRoutes from './routes/user.routes.js'
// import {app, server} from './socket/socket.js'

// import connectToMongoDb from './db/mongoDbConnection.js'

// dotenv.config();
// app.use(cookieParser());

// const PORT = process.env.PORT || 5000 ;

// const __dirname =path.resolve()

// app.use(express.json())
// app.use('/api/auth',authRoutes) 
// app.use("/api/messages", messageRoutes);
// app.use("/api/users", userRoutes);

// app.use(express.static(path.join(__dirname,"/Frontend/dist")))

// app.get("*",(req,res)=>{
//     res.sendFile(path.join(__dirname, "Frontend","dist","index.html"))
// })


// //    Server Listening
// server.listen(PORT,()=>{
//     connectToMongoDb()
//     console.log(`Server is running on port ${PORT}`)
// })
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDb from './db/mongoDbConnection.js'
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "Frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
	connectToMongoDb();
	console.log(`Server Running on port ${PORT}`);
});