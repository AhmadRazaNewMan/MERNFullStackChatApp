import mongoose from 'mongoose'

const connectToMongoDb = async() => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log("Connection to database Failed!!!!!" ,error.message)
  }

}

export default connectToMongoDb