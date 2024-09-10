const Razorpay = require("../config/razorpay");
const Course = require("../models/Course");
const User = require('../models/User');
const mailSender = require("../utils/nodemailer");
require('dotenv').config();

exports.createRazorpayOrder = async(req,res)=>{

    try{
        // get user id and course id
        const {course_id} = req.body;
        const userId = req.decodedToken.id;

        // check course id is valid
        const course = await Course.findById(course_id);

        if(!course){
            return res.status(400).json({
                sucess:false,
                message:"Invalid course id"
            })
        }

        // check user is already enrolled in the course
        
        // Error chance:Might need to convert userId to mongoose document iD form
        
        if(course.studentsEnrolled.includes(userId)){
            return res.status(400).json({
                sucess:false,
                message:"Student already enrolled"
            })
        }

        // create order
        const options={
            amount:course.price,
            currency:"INR",
            notes:{
                courseId:course_id,
                userId:userId
            }
        }
        
        const order = await Razorpay.orders.create(options);
        
        console.log(order);
        // return response
        return res.status(200).json({
            sucess:true,
            message:"Order created succesfully",
            courseName:course.name,
            courseDescription:course.description,
            orderId:order.id,
            amount:order.amount
        })
    }
    catch(e){
        return res.status(500).json({
            sucess:false,
            message:"Internal servor error",
            error:e.message   
        })
    }
}

exports.validateSignature = async(req,res) =>{

    try{
        // get signature 
        const signature = req.header("x-razorpay-signature");

        // encrypt the available signature in server
        const shasum = crypto.createHmac("sha256",process.env.WEB_HOOK_SECRET);
        shasum.update(JSON.stringify(req.body));
        const expectedSignature = shasum.digest("hex");

        // match the two signatures
        if(expectedSignature !== signature){
            return res.status(400).json({
                sucess:false,
                message:"Invalid signature"
            })
        }

        // add courseid in student and student id in course
        const {courseId,userId} = req.body.payload.payment.entity.notes;
        const updatedCourse = await Course.findByIdAndUpdate({_id:courseId},{ $push:{studentsEnrolled:userId}} , {new:true});

        const updatedStudent = await User.findByIdAndUpdate({_id:userId},{ $push:{courses:courseId}} , {new:true});
        
        // return response
        return res.status(200).json({
            sucess:true,
            message:"Student enrolled in course",
            updatedCourse:updatedCourse,
            updatedStudent:updatedStudent
        })
    }
    catch(e){
        return res.status(500).json({
            sucess:false,
            message:"Internal servor error",
            error:e.message   
        })
    }
}