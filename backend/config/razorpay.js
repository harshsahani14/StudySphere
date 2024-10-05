const razorpayInst = require("razorpay");
require('dotenv').config();

exports.razorpay = new razorpayInst({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
});
