import express from 'express'
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";

import messageRoutes from "./routes/message.route.js";
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'



import connectToMongoDb from './db/mongoDbConnection.js'



const app  = express()
dotenv.config();
app.use(cookieParser());

const PORT = process.env.PORT || 5000 ;

app.use(express.json())
app.use('/api/auth',authRoutes) 
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


















//  ROUTES



app.get('/',(req,res)=>{

    res.send('Hello World!')
})




















//    Server Listening
app.listen(PORT,()=>{
    connectToMongoDb()
    console.log(`Server is running on port ${PORT}`)
})