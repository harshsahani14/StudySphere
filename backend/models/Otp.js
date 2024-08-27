const mongoose = require("mongoose");

const OtpSchema = new mongoose.Schema({

    value:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    }

})

module.exports = mongoose.Model("Otp",OtpSchema);