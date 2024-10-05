const express = require("express");
const courseProgressRouter = express.Router();

const {
  isvalidToken,
  isStudent,
  isInstructor,
  isAdmin,
} = require("../middlewares/Authz");

const {updateCourseProgress,getCourseProgress} = require('../controllers/CourseProgress');

courseProgressRouter.put('/updateCourseProgress',isvalidToken,updateCourseProgress);
courseProgressRouter.get('/getCourseProgress',isvalidToken,isStudent,getCourseProgress);

module.exports = courseProgressRouter;



