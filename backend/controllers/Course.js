const Course = require("../models/Course");
const User = require("../models/User");
const Tag = require("../models/Category");
const imgUpload = require("../utils/assetUploadToCloud");
const { populate } = require("../models/Rating_Review");
require("dotenv").config();

// createCourse
exports.createCourse = async (req, res) => {
  try {
    // fetch data
    const {
      courseName,
      courseDesc,
      price,
      tag,
      whatYouWillLearn,
      requirements,
    } = req.body;
    const thumbnail = req.files.thumbnail;

    // validation
    if (
      !courseName ||
      !courseDesc ||
      !price ||
      !tag ||
      !whatYouWillLearn ||
      !requirements ||
      !thumbnail
    ) {
      return res.status(401).json({
        sucess: false,
        message: "Please fill all details",
      });
    }

    // Check if given tag is available or not
    const dbTag = await Tag.findOne({ name: tag });

    if (!dbTag) {
      return res.status(401).json({
        sucess: false,
        message: "Tag is invalid",
      });
    }

    // Upload thumbnail on cloud

    const img = imgUpload(thumbnail, process.env.cloudDbFolder);

    // create course object and add course object
    const dbCourse = await Course.create({
      courseName,
      courseDesc,
      price,
      thumbnail: img.secure_url,
      tag: dbTag._id,
      whatYouWillLearn,
      requirements,
      instructor: req.decodedToken.id,
    });

    // Add course in the given tag
    const updatedTag = await Tag.findOneAndUpdate(
      { name: tag },
      { $push: { courses: dbCourse._id } }
    );

    // Add course in the instructor object
    const updatedInstructor = await User.findOneAndUpdate(
      { _id: req.decodedToken.id },
      { $push: { courses: dbCourse._id } }
    );

    // return response
    return res.status(500).json({
      sucess: true,
      message: "Course created sucessfully",
    });
  } catch (e) {
    return res.status(500).json({
      sucess: false,
      message: e.message,
    });
  }
};

// getAllCourses
exports.getAllCourses = async (req, res) => {
  try {
    const allCourses = await Course.find({});

    return res.status(200).json({
      sucess: true,
      message: "All courses fetched sunccesfuly",
    });
  } catch (e) {
    return res.status(500).json({
      sucess: false,
      message: "Intrnal servor error",
      error: e.message,
    });
  }
};

exports.getCourseDetails = async(req,res)=>{

    try{

        const {courseId} = req.body;

        const courseDetails = await Course.findById({_id:courseId})
                                    .populate( { path:"Instructor" 
                                                  , populate:{
                                              
                                                      path:"Profile"
                                                    
                                                    } } ) 
                                    .populate("rating_review")  
                                    .populate("category")
                                    .populate(  { path:"content"
                                                  , populate:{
                                                     path:"subSections" 
                                                  }})    
                                                  
          return res.status(200).json({
              sucess: true,
              message: "Course details fetched successfully",
              courseDetails: courseDetails
          })                                        
          
                                                                              
    }
    catch(e){
        return res.status(500).json({
          sucess: false,
          message: "Intrnal servor error",
          error: e.message,
        });
    }
}
