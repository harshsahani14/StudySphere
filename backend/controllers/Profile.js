const User = require("../models/User");
const Profile = require("../models/Profile");

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

    
}