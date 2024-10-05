const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({

    gender:{
        type:String,
    },
    dob:{
        type:String,
    },
    bio:{
        type:String,
    },
    profession:{
        type:String,
    }

})

module.exports = mongoose.model("Profile",ProfileSchema);