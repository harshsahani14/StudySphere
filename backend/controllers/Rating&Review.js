const Course = require("../models/Course");
const Rating_Review = require("../models/Rating_Review");
const mongoose = require("mongoose");
// const ObjectId = mongoose.Types.ObjectId;

// createRating&Review
exports.createRatingReview = async(req,res)=>{

    try{

        // get user id
        const userId = req.decodedToken.id;

        // fetch data
        const {rating,review,courseId} = req.body;

        // check if student is enrolled in course or not
        const courseDetails = await Course.findOne({_id:courseId});

        console.log(courseDetails)                                            

        if(!courseDetails.studentsEnrolled.includes(userId)){
            return res.status(404).json({
                sucess:false,
                message:"Student is not enrolled in course",
            })
        }                                            

        // check if student has already reviewed the course
        const ratingReview = await Rating_Review.findOne({ user:userId,course:courseId });

        if(ratingReview){
            return res.status(403).json({
                sucess:false,
                message:"Student has already reviewed the course"
            })
        }

        // create rating&review
        const newRatingReview = await Rating_Review.create({  rating,review,course:courseId,user:userId  });

        // update course
        const updatedCourse = await Course.findByIdAndUpdate(courseId,{ $push:{rating_review:newRatingReview} });
        
        // return response
        return res.status(200).json({
            sucess:true,
            message:"Rating review added succesfully",
            newRatingReview
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

// getAvgRatingOfCourse
exports.getAvgRatingOfCourse = async(req,res)=>{

    try{
        // getCourseId
        const {courseId} = req.body 

        // calculate avg rating
        const avgRating = await Rating_Review.aggregate([
                { 
                    $match: { course: new mongoose.Schema.Types.ObjectId(courseId) }  
                },
                {
                    $group:
                      {
                        _id: "$course",
                        avgRating: { $avg: "$rating" }
                      }
                  }  
          ])

        console.log(avgRating);  

        // return response
        if(avgRating.length>0){
            return res.status(200).json({

                sucess:true,
                message:"Average rating of course fetched succesfully",
                avgRating:avgRating[0].avgRating
            })

        }
    }
    catch(e){
        return res.status(500).json({
            sucess:false,
            message:"Internal servor error",
            error:e.message   
        })
    }   
}

// getAllRatings&Review for a course
exports.getAllRatingReview = async(req,res)=>{

    try{
        const {courseId} = req.body;

        const ratingReview = await Rating_Review.find({course:courseId})
                                    .sort({rating:"desc"})
                                    .populate({ path:"user", select:"firstName lastName email img"})
                                    .populate({ path:"course", select:"name" });


        return res.status(200).json({
            sucess:true,
            message:"Rating Reviews fetched successfully",
            ratingReview:ratingReview
        })                            
    }
    catch{
        return res.status(500).json({
            sucess:false,
            message:"Internal servor error",
            error:e.message   
        })
    }
}