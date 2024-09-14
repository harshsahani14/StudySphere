const Course = require("../models/Course");
const User = require("../models/User");
const Category = require("../models/Category");
const imgUpload = require("../utils/assetUploadToCloud");
const { populate } = require("../models/Rating_Review");
const User = require("../models/User");
require("dotenv").config();

// createCourse
exports.createCourse = async (req, res) => {
  try {
      // fetch data
      const {
        courseName,
        courseDesc,
        price,
        category,
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
        !thumbnail ||
        !category
      ) {
        return res.status(401).json({
          sucess: false,
          message: "Please fill all details",
        });
      }

      // Check if given tag is available or not
      const dbCategory = await Category.findOne({ name: category });

      if (!dbCategory) {
        return res.status(401).json({
          sucess: false,
          message: "Category is invalid",
        });
      }

      // Upload thumbnail on cloud

      const img = await imgUpload(thumbnail, process.env.cloudDbFolder);

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
      const updatedTag = await Category.findOneAndUpdate(
        { name: category },
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
        dbCourse:dbCourse
      });
  } catch (e) {
    return res.status(500).json({
      sucess: false,
      message:"Internal server error",
      error:e.message
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
        allCourses:allCourses,
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

// getUserCourses

exports.getEnrolledCourses = async (req,res)=>{

    try{

        const userId = req.body;

        const User = await User.findById(userId).populate("courses");

        return res.status(200).json({
            sucess:true,
            message:"All courses fetched sucessfully",
            courses:User.courses
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

// statusOfCourse

exports.setCourseStatus = async (req,res)=>{

    try{
      
        const {courseId,setStatus} = req.body

        const updatedCourse = await Course.findByIdAndUpdate(courseId,{status:setStatus});

        return res.status(200).json({
          sucess:true,
          message:"Course status set succesfully",
          updatedCourse:updatedCourse
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