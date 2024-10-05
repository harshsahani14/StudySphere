const CourseProgress = require("../models/CourseProgress");
const Course = require("../models/Course");
const User = require("../models/User");
const mongoose = require('mongoose')
const Section = require('../models/Section') ;

exports.updateCourseProgress = async(req,res)=>{

    try{
        const {courseId,subSectionId} = req.body;
        const userId = req.decodedToken.id;

        var updatedCourseProgress = await CourseProgress.findOneAndUpdate({course:courseId},{$push:{completedVideos:subSectionId}});

        console.log(updatedCourseProgress)

        if(!updatedCourseProgress){
            const courseProgress = await CourseProgress.create({course:courseId});
            updatedCourseProgress = await CourseProgress.findOneAndUpdate({course:courseId},{$push:{completedVideos:subSectionId}});
            const updatedUser = await User.findByIdAndUpdate(userId,{$push:{courseProgess:courseProgress._id}});
          }
          
        
        return res.status(200).json({
          sucess:true,
          message:"Course progress updated succesfully",
          updatedCourseProgress:updatedCourseProgress
        })

    }
    catch(e){
      return res.status(500).json({
        sucess: false,
        message: "Internal server error",
        error: e.message,
      });
    }
}

exports.getCourseProgress = async (req,res)=>{

    try{
        // get courseId & userId 
        const {courseId} = req.body;

        const userId = req.decodedToken.id;

        // get total videos count of course;
        const totalVideos = await Course.aggregate([
          {
            $match: { _id: new mongoose.Types.ObjectId(courseId) }  // Match the course by ID
          },
        ])

        console.log(totalVideos);
        // get completed videos count of course
        
        
        // calculate percentage

        // return response
        return res.status(200).json({
          sucess:true,
          message:"Course progress percent calculated successfully",
          percentage:percentage
        })
    }
    catch(e){
        return res.status(500).json({
            sucess: false,
            message: "Internal server error",
            error: e.message,
          });
    }
}