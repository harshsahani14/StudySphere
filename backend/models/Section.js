const mongoose = require("mongoose");

const SectionSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    subSections:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video"
    }]
})

module.exports = mongoose.model("Section",SectionSchema);