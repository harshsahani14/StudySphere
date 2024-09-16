const express = require('express');
const router = express.Router();

const {isvalidToken,isStudent,isInstructor,isAdmin} = require('../middlewares/Authz')

const {sendOtp,signUp,login} = require('../controllers/Authn');
const {createCategory,getAllCategories,getCategoryPageDetails} = require('../controllers/Category');
const {contactUs} = require('../controllers/ContactUs');
const {createCourse,getAllCourses,getCourseDetails,getEnrolledCourses,setCourseStatus} = require('../controllers/Course');
const {createRazorpayOrder,validateSignature} = require('../controllers/Payment');
const {updateProfile,deleteAccount,getUserDetails} = require('../controllers/Profile');
const {createRatingReview,getAvgRatingOfCourse,getAllRatingReview} = require('../controllers/Rating&Review');
const {resetPasswordStep1,resetPasswordStep2 } = require('../controllers/ResetPassword');
const {createSection,updateSection,deleteSection} = require('../controllers/Section');
const {createSubSection} = require('../controllers/SubSection');

router.post('/sendOtp',sendOtp);
router.post('/signUp',signUp);
router.post('/login',login);
router.post('/createCategory',isvalidToken,isAdmin,createCategory);
router.get('/getAllCategories',getAllCategories);
router.get('/getCategoryPageDetails',getCategoryPageDetails);
router.post('/contactUs',contactUs);
router.post('/createCourse',isvalidToken,isInstructor,createCourse);
router.get('/getAllCourses',getAllCourses);
router.get('/getCourseDetails',isvalidToken,isStudent,getCourseDetails);
router.get('/getEnrolledCourses',isvalidToken,isStudent,getEnrolledCourses);
router.put('/setCourseStatus',setCourseStatus);
router.post('/createRazorpayOrder',isvalidToken,isStudent,createRazorpayOrder);
router.post('/validateSignature',isvalidToken,isStudent,validateSignature);
router.post('/updateProfile',isvalidToken,updateProfile);
router.delete('/deleteAccount',isvalidToken,deleteAccount);
router.get('/getUserDetails',isvalidToken,getUserDetails);
router.post('/createRatingReview',isvalidToken,isStudent,createRatingReview);
router.get('/getAvgRatingOfCourse',isvalidToken,getAvgRatingOfCourse);
router.get('/getAllRatingReview',isvalidToken,getAllRatingReview);
router.post('/resetPasswordStep1',resetPasswordStep1);
router.put('/resetPasswordStep2',resetPasswordStep2);
router.post('/createSection',isvalidToken,isInstructor,createSection);
router.put('/updateSection',isvalidToken,isInstructor,updateSection);
router.delete('/deleteSection',isvalidToken,isInstructor,deleteSection);
router.post('/createSubSection',isvalidToken,isInstructor,createSubSection)

module.exports = router;