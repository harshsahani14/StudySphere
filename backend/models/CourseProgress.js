const mongoose = require("mongoose");

const CourseProgessSchema = new mongoose.Schema({

    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    },
    completedVideos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video"
    }]

})

module.exports = mongoose.Model("CourseProgress",CourseProgressSchema);