const mongoose = require("mongoose");
const { sendMail } = require("../utils/nodemailer");
const { emailOtp } = require('../templates/Email_Otp');

const OtpSchema = new mongoose.Schema(
  {
    otp: {
      type:String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Number,
      required:true
    },
    expiresIn: {
      type: Number,
      default: 120000,
    },
  },
  
);

OtpSchema.pre("save", function(next){
  try {
    const response = sendMail(this.email, "Otp Verification for Edtech", emailOtp(this.otp));
    next();
  } catch (e) {
    console.log("Error while sending mail", e.message);
  }
});

module.exports = mongoose.model("Otp", OtpSchema);
