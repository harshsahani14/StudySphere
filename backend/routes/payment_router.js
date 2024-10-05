const express = require("express");
const paymentRouter = express.Router();

const {
  isvalidToken,
  isStudent,
  isInstructor,
  isAdmin,
} = require("../middlewares/Authz");



const {
  createRazorpayOrder,
  validateSignature,
} = require("../controllers/Payment");




paymentRouter.post(
  "/createRazorpayOrder",
  isvalidToken,
  isStudent,
  createRazorpayOrder
);
paymentRouter.post("/validateSignature", isvalidToken, isStudent, validateSignature);




module.exports = paymentRouter;
