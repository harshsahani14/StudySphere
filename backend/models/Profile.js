const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({

    gender:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    bio:{
        type:String,
        required:true
    },
    profession:{
        type:String,
        required:true
    }

})

module.exports = mongoose.Model("Profile",ProfileSchema);