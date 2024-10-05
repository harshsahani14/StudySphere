const express = require('express');
const authRouter = express.Router();

const {sendOtp,signUp,login} = require('../controllers/Authn');

authRouter.post('/sendOtp',sendOtp);
authRouter.post('/signup',signUp);
authRouter.post('/login',login);

module.exports = authRouter;
