import User from "../models/user.models.js"
import bcrypt from 'bcryptjs'


export const signup = async (req, res) => {
    try {
      const { fullName, username, password, confirmPassword, gender } = req.body;
  
      if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords don't match" });
      }
  
      const existingUser = await User.findOne({ username });
  
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
      const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
  
      const newUser = new User({
        fullName,
        username,
        password: hashedPassword,
        gender,
        profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
      });
  
      await newUser.save();
  

  
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } catch (error) {
      console.log("Error in signup controller", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
export const login = ( req,res)=>{
    console.log("Login for verification")

}
export const signout = ( req,res)=>{
    console.log("goodBye")

}