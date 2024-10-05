const express = require("express");
const ratingReviewRouter = express.Router();

const {
  isvalidToken,
  isStudent,
  isInstructor,
  isAdmin,
} = require("../middlewares/Authz");

const {
    createRatingReview,
    getAvgRatingOfCourse,
    getAllRatingReview,
  } = require("../controllers/Rating&Review");

ratingReviewRouter.post("/createRatingReview", isvalidToken, isStudent, createRatingReview);
ratingReviewRouter.get("/getAvgRatingOfCourse", isvalidToken, getAvgRatingOfCourse);
ratingReviewRouter.get("/getAllRatingReview", isvalidToken, getAllRatingReview);

module.exports = ratingReviewRouter;