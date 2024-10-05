const express = require('express');
const profileRouter = express.Router();

const {isvalidToken,isStudent,isInstructor,isAdmin} = require('../middlewares/Authz')
const {updateProfile,deleteAccount,getUserDetails,updateDisplayPicture} = require('../controllers/Profile');
const {resetPasswordStep1,resetPasswordStep2 } = require('../controllers/ResetPassword');

profileRouter.put('/updateProfile',isvalidToken,updateProfile);
profileRouter.delete('/deleteAccount',isvalidToken,deleteAccount);
profileRouter.get('/getUserDetails',isvalidToken,getUserDetails);
profileRouter.post('/resetPasswordStep1',resetPasswordStep1);
profileRouter.put('/resetPasswordStep2',resetPasswordStep2);
profileRouter.put('/updateDisplayPicture', isvalidToken, updateDisplayPicture)

module.exports = profileRouter;
