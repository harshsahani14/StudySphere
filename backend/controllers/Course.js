const Course = require("../models/Course");
const User = require("../models/User");
const Category = require("../models/Category");
const { assetUploadToCloud } = require("../utils/assetUploadToCloud");

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
      whatYouWillLearn,
      requirements,
    } = req.body;

    const {thumbnail} = req.files;

    // validation
    if (
      !courseName ||
      !courseDesc ||
      !price ||
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
    const dbCategory = await Category.findById( category );

    if (!dbCategory) {
      return res.status(401).json({
        sucess: false,
        message: "Category is invalid",
      });
    }

    // Upload thumbnail on cloud

    const img = await assetUploadToCloud(thumbnail, process.env.cloudDbFolder);

    // create course object and add course object
    const dbCourse = await Course.create({
      name:courseName,
      description:courseDesc,
      price:price,
      thumbnail: img.secure_url,
      whatYouWillLearn:whatYouWillLearn,
      requirements:requirements,
      instructor: req.decodedToken.id,
    });

    const updatedDbCourse = await Course.findByIdAndUpdate(dbCourse._id,{ $push:{category:category} })    

    // Add course in the given tag
    const updatedCategory = await Category.findOneAndUpdate(
      { _id : category },
      { $push: { courses: updatedDbCourse._id } }
    );

    // Add course in the instructor object
    const updatedInstructor = await User.findOneAndUpdate(
      { _id: req.decodedToken.id },
      { $push: { courses: updatedDbCourse._id } }
    );

    // return response
    return res.status(200).json({
      sucess: true,
      message: "Course created sucessfully",
      dbCourse: updatedDbCourse,
    });
  } catch (e) {
    return res.status(500).json({
      sucess: false,
      message: "Internal server error",
      error: e.message,
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
      allCourses: allCourses,
    });
  } catch (e) {
    return res.status(500).json({
      sucess: false,
      message: "Intrnal servor error",
      error: e.message,
    });
  }
};

exports.getCourseDetails = async (req, res) => {
  try {
    const { courseId } = req.body;

    const courseDetails = await Course.findById({ _id: courseId })
      .populate({
        path: "instructor",
        populate: {
          path: "profile",
        },
      })
      .populate("rating_review")
      .populate("category")
      .populate({
        path: "content",
        populate: {
          path: "subSections",
        },
      });

    return res.status(200).json({
      sucess: true,
      message: "Course details fetched successfully",
      courseDetails: courseDetails,
    });
  } catch (e) {
    return res.status(500).json({
      sucess: false,
      message: "Intrnal servor error",
      error: e.message,
    });
  }
};

// getUserCourses

exports.getEnrolledCourses = async (req, res) => {
  try {
    const userId = req.decodedToken.id;

    const dbuser = await User.findById(userId).populate("courses");

    return res.status(200).json({
      sucess: true,
      message: "All courses fetched sucessfully",
      courses: dbuser.courses,
    });
  } catch (e) {
    return res.status(500).json({
      sucess: false,
      message: "Internal server error",
      error: e.message,
    });
  }
};

// statusOfCourse
exports.setCourseStatus = async (req, res) => {
  try {
    const { courseId, setStatus } = req.body;

    const updatedCourse = await Course.findByIdAndUpdate(courseId, {
      status: setStatus,
    });

    return res.status(200).json({
      sucess: true,
      message: "Course status set succesfully",
      updatedCourse: updatedCourse,
    });
  } catch (e) {
    return res.status(500).json({
      sucess: false,
      message: "Internal server error",
      error: e.message,
    });
  }
};

