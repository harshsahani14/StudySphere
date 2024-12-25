const express = require("express");
const server = express();

const paymentRouter = require("./routes/payment_router");
const authRouter = require("./routes/auth_routes");
const profileRouter = require("./routes/profile_routes");
const categoryRouter = require("./routes/category_routes");
const sectionRouter = require("./routes/section_router");
const subSectionRouter = require("./routes/subSection_routes");
const courseRouter = require("./routes/course_Routes");
const ratingReviewRouter = require("./routes/rating_review_router");
const courseProgressRouter = require("./routes/course_progress_router");
const contactUs = require("./routes/contactus_routes");

const dbConnect = require("./config/database");
const cookieParser = require("cookie-parser");
const { cloudinarySetup } = require("./config/cloudDb");
const cors = require("cors");

const fileUpload = require("express-fileupload");

require("dotenv").config();

// Database connect
dbConnect();

// middlewares
server.use(express.json());
server.use(cookieParser());
server.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,

  })
);
server.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/temp",
  })
);
// cloudinary setup
cloudinarySetup();

// mounting routes
server.use("/v1", authRouter);
server.use("/v1", profileRouter);
server.use("/v1", categoryRouter);
server.use("/v1", sectionRouter);
server.use("/v1", subSectionRouter);
server.use("/v1", courseRouter);
server.use("/v1", ratingReviewRouter);
server.use("/v1", paymentRouter);
server.use("/v1", courseProgressRouter);
server.use("/v1", contactUs);

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Server activated at ${port}`);
});

server.get("/edtech", (req, res) => {
  res.send("Edtech backend is live");
});
