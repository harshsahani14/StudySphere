const express = require("express");
const courseRouter = express.Router();

const {
  isvalidToken,
  isStudent,
  isInstructor,
  isAdmin,
} = require("../middlewares/Authz");

const {
    createCourse,
    getAllCourses,
    getCourseDetails,
    getEnrolledCourses,
    setCourseStatus,
  } = require("../controllers/Course");

courseRouter.post("/createCourse", isvalidToken, isInstructor, createCourse);
courseRouter.get("/getAllCourses", getAllCourses);
courseRouter.get("/getCourseDetails", isvalidToken,getCourseDetails);
courseRouter.get("/getEnrolledCourses", isvalidToken, isStudent, getEnrolledCourses);
courseRouter.put("/setCourseStatus", isvalidToken,isInstructor,setCourseStatus);

module.exports = courseRouter;