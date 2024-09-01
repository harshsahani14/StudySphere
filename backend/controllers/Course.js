const Course = require("../models/Course");
const User = require("../models/User");
const Tag = require("../models/Tag");
const imgUpload = require("../utils/imgUploadToCloud")
require("dotenv").config();

// createCourse
exports.createCourse = async (req,res)=>{

    try{
        // fetch data
        const {courseName,courseDesc,price,tag,whatYouWillLearn,requirements} = req.body;
        const thumbnail = req.files.thumbnail

        // validation
        if(!courseName || !courseDesc || !price || !tag || !whatYouWillLearn || !requirements || !thumbnail){
            return res.status(401).json({
                sucess:false,
                message:"Please fill all details"
            })
        }

        // Check if given tag is available or not
        const dbTag = await Tag.findOne({name:tag});

        if(!dbTag){
            return res.status(401).json({
                sucess:false,
                message:"Tag is invalid"
            })
        }

        // Get instructor from user id

        const dbInstructor = await User.findById(req.decodedToken.id);

        // Upload thumbnail on cloud

        const img = imgUpload(thumbnail,process.env.cloudDbFolder)
        
        // create course object and add course object
        const dbCourse = await Course.create({
            courseName,
            courseDesc,
            price,
            thumbnail:img.secure_url,
            tag:dbTag._id,
            whatYouWillLearn,
            requirements,
            instructor:req.decodedToken.id,
        })

        // Add course in the given tag
        const updatedTag = await Tag.findOneAndUpdate({name:tag},{ $push:{ courses : dbCourse._id} })

        // Add course in the instructor object
        const updatedInstructor = await User.findOneAndUpdate({_id:req.decodedToken.id} , { $push:{ courses : dbCourse._id }})

        // return response
        return res.status(500).json({
            sucess:true,
            message:"Course created sucessfully"
        })
    }
    catch(e){
        return res.status(500).json({
            sucess:false,
            message:e.message   
        })
    }
}

// getAllCourses