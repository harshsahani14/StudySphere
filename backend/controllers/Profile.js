const User = require("../models/User");
const Profile = require("../models/Profile");
const Course = require("../models/Course");

exports.updateProfile = async(req,res)=>{

    try{

        // data input
        const {dob="",bio="",gender,profession=""} = req.body;

        // data validation
        if(!dob || !bio || !gender || !phoneNo){
            return res.status(401).json({
                sucess:false,
                message:"Please fill all the fields"
            })
        }
        // update profile object with the given details
        const userId = req.decodeToken.id;
        const user = await User.findById(userId);
        const profile = await Profile.findById(user.profile);

        profile.dob = dob;
        profile.gender = gender;
        profile.bio = bio;
        profile.profession = profession;
        
        const updatedProfile = await profile.save();
        
        // return response
        return res.status(200).json({
            sucess:true,
            message:"Profile updated successfuly",
        })
    }
    catch(e){
        return res.status(500).json({
            sucess:false,
            message:"Internal servor error",
            error:e.message   
        })
    }
}

exports.deleteAccount = async (req,res) => {

    try{
        // get id from request body
        const userId = req.decodeToken.id;
        
        // validation on id
        const user = await User.findById(userId);

        if(!user){
            return res.status(404).json({
                sucess:false,
                message:"User not found"
            })
        }

        // delete profile mapped to the user
        const deletedProfile = await Profile.findByIdAndDelete({_id:user.profile});

        // delete user
        const deltedUser = await User.findByIdAndDelete({_id:userId});

        // UnEnroll the student from all of its courses

        // return response
        
        return res.status(200).json({
            sucess:true,
            message:"Account deleted successfuly",
            deltedUser:deltedUser,
            deletedProfile:deletedProfile
        })
    }
    catch(e){
        return res.status(500).json({
            sucess:false,
            message:"Internal servor error",
            error:e.message   
        })
    }
}

// getUserDetails
exports.getUserDetails = async(req,res) => {

    try{
        // get id from request body
        const userId = req.decodeToken.id;

        // validation on id
        if(!userId){
            return res.status(404).json({
                sucess:false,
                message:"User not found"
            })
        }

        // get user from db using id
        const user = await User.findById({_id:userId}).populate("profile");

        // return response
        return res.status(200).json({
            sucess:true,
            message:"User details fetched succesfully",
            user:user
        })
    }
    catch(e){
        return res.status(500).json({
            sucess:false,
            message:"Internal servor error",
            error:e.message   
        })
    }
}

