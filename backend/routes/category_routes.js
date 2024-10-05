const express = require("express");
const categoryRouter = express.Router();

const {
  isvalidToken,
  isStudent,
  isInstructor,
  isAdmin,
} = require("../middlewares/Authz");
const {
  createCategory,
  getAllCategories,
  getCategoryPageDetails,
} = require("../controllers/Category");

categoryRouter.post("/createCategory", isvalidToken, isAdmin, createCategory);
categoryRouter.get("/getAllCategories", getAllCategories);
categoryRouter.get("/getCategoryPageDetails", getCategoryPageDetails);

module.exports = categoryRouter;
