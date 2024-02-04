import express from 'express'
import dotenv from 'dotenv'


import authRoutes from './routes/auth.routes.js'
import connectToMongoDb from './db/mongoDbConnection.js'



const app  = express()
dotenv.config();
const PORT = process.env.PORT || 5000 ;

app.use(express.json())
app.use('/api/auth',authRoutes) 
















//  ROUTES



app.get('/',(req,res)=>{

    res.send('Hello World!')
})




















//    Server Listening
app.listen(PORT,()=>{
    connectToMongoDb()
    console.log(`Server is running on port ${PORT}`)
})