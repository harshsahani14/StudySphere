const mongoose = require("mongoose");
const sendMail = require("../config/nodemailer")

const OtpSchema = new mongoose.Schema({

    otp:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    createdAt:{
        type:Number,
        default:Date.now(),
    },
    expiresIn:{
        type:Number,
        default:300000
    }

});

OtpSchema.pre('save',async(next)=>{

    try{
        const response = await sendMail(this.email,'Otp Verification',this.otp);
        next();
    }
    catch(e){
        console.log("Error while sending mail",e.message)
    }
})


module.exports = mongoose.Model("Otp",OtpSchema);