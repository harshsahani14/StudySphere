const User = require("../models/User");
const Profile = require("../models/Profile");
const Course = require("../models/Course");
const {assetUploadToCloud} = require("../utils/assetUploadToCloud")
require("dotenv").config();

exports.updateProfile = async(req,res)=>{

    try{

        // data input
        const {dob="",bio="",gender,profession=""} = req.body;

        // data validation
        if(!dob || !bio || !gender || !profession){
            return res.status(401).json({
                sucess:false,
                message:"Please fill all the fields"
            })
        }
        // update profile object with the given details


        const userId = req.decodedToken.id;
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
        const userId = req.decodedToken.id;
        
        // validation on id
        const user = await User.findById(userId);

        if(!user){
            return res.status(404).json({
                sucess:false,
                message:"User not found"
            })
        }
        // UnEnroll the student from all of its courses
        if(req.decodedToken.role == "student"){
            const courses = await User.findById(userId).populate("courses");

            for(course in courses){
                await Course.findByIdAndUpdate(course,{$pull:{studentsEnrolled:userId}});
            }
        }

        // delete profile mapped to the user
        const deletedProfile = await Profile.findByIdAndDelete({_id:user.profile});

        // delete user
        const deltedUser = await User.findByIdAndDelete({_id:userId});


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
            message:"Internal server error",
            error:e.message   
        })
    }
}

// getUserDetails
exports.getUserDetails = async(req,res) => {

    try{
        // get id from request body
        const userId = req.decodedToken.id;

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
            message:"Internal server error",
            error:e.message   
        })
    }
}

exports.updateDisplayPicture = async(req,res)=>{

    try{
        // fetch image and userid
        const {displayPicture} = req.files;
        const userId = req.decodedToken.id;

        // validate image
        if(!displayPicture){
            return res.status(401).json({
                sucess:false,
                message:"Please upload a valid image"
            })
        }

        // upload to cloud

        const image = await assetUploadToCloud(displayPicture,process.env.cloudDbFolder)

        // update user with updatedImage
        const updatedUser = await User.findByIdAndUpdate(userId,{img:image.secure_url});
 
        // return response
        return res.status(200).json({
            sucess:true,
            message:"Display picture updated succesfully",
            user:updatedUser
        })
    }
    catch(e){
        return res.status(500).json({
            sucess:false,
            message:"Internal server error",
            error:e.message   
        })
    }
}