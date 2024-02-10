// import User from "../models/user.models.js";

// import  Express  from "express";

// export const getUsersForSidebar = async(req,res)=>{
//     try { 
//         const loggedInUserId = req.user._id

//         const filteredUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password") // {_id:{$ne:loggedInUserId}} this mean return all except the one which is logged in like you dont want to see yourself on sidebar
//         return res.status(200).json(filteredUsers)
//     } catch (error) {
//         console.log("Error in getUsersForSidebar controller",error.message)
//         res.status(500).json({error:"Internal server error"})
//     }

// }
import User from "../models/user.models.js";

export const getUsersForSidebar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;

		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};