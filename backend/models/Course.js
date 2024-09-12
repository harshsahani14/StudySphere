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
    whatYouWillLearn:{
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
    studentsEnrolled:[
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
    category:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Category"
        }
    ],
    requirements:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["draft","published"]
    }
})

module.exports = mongoose.Model("Course",CourseSchema);