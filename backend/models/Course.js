const mongoose = require("mongoose");


const CourseSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    WhatYouWillLearn:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    stundentsEnrolled:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    content:[
        {       
            type:mongoose.Schema.Types.ObjectId,
            ref:"Section"
        }
    ],
    rating_review:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Rating_Review"
        }
    ],
    thumbnail:{
        type:String,
        required:true
    },
    tag:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Tag"
        }
    ]

})

module.exports = mongoose.Model("Course",CourseSchema);