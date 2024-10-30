const User = require("../models/User");
const Otp = require("../models/Otp");
const bcrypt = require("bcrypt");
const otp_generator = require("otp-generator");
const Profile = require("../models/Profile");
const jwt = require("jsonwebtoken")
require("dotenv").config();

// sendOtp
exports.sendOtp = async (req, res) => {
  try {
    // fetching email
    const { email } = req.body;

    // Checking if user exists or not
    const dbUser = await User.findOne({email:email})

    console.log(dbUser)

    if(dbUser){
        return res.status(400).json({
            message: "User already exists",
            sucess: false
        })
    }

    // Generating unique OTP
    let genOtp = await otp_generator.generate(6, {
      upperCase: false,
      specialChars: false,
      alphabets: false,
    });

    console.log(genOtp);
    let result = await Otp.findOne({ otp: genOtp });

    while (result) {
      genOtp = await otp_generator.generate(6, {
        upperCase: false,
        specialChars: false,
        alphabets: false,
      });
      result = await Otp.findOne({ otp: genOtp });
    }

    // Creating Otp object and saving in db
    const otp = {
      email:email,
      otp:genOtp,
      createdAt:Date.now()
    };

    const response = await Otp.create( otp );

    return res.status(200).json({
      sucess: true,
      message: "Otp sent to email",
      otp: response,
    });
  } catch (e) {

    console.log(e.message)
    return res.status(500).json({
      sucess: false,
      message: "Internal server error",
      error: e.message,
    });
  }
};

// signup
exports.signUp = async (req, res) => {
  try {
    // fecthing information form request body
    const { fName, lName, email, password, confirmPassword, phone, role, otp } =
      req.body;

    // checking if all fields are filled
    if (
      !fName ||
      !lName ||
      !email ||
      !password ||
      !confirmPassword ||
      !phone ||
      !role ||
      !otp
    ) {
      return res.status(400).json({
        message: "All Input fields need to filled",
        sucess: false,
      });
    }

    // Both passwords match or not
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Passwords dont match",
        sucess: false,
      });
    }

    // Otp verification
    const recentOtp = await Otp.find({ email })
      .sort({createdAt:"desc"})
      .limit(1);
    console.log(recentOtp);

    if (recentOtp[0].otp !== otp) {
      return res.status(400).json({
        sucess: false,
        message: "Otp mismatch",
      });
    } 
    else if (Date.now() > recentOtp[0].createdAt + recentOtp[0].expiresIn) {
      return res.status(410).json({
        message: "Otp expired",
        sucess: false,
      });
    }

    // Password hashing
    const hashPass = await bcrypt.hash(password, 10);

    const profile = new Profile({
      gender: null,
      dob: null,
      profession: null,
      bio: null,
    });

    await profile.save()

    const dbUser = new User({
      firstName: fName,
      lastName: lName,
      email: email,
      password: hashPass,
      profile: profile._id,
      role: role,
      phone:phone,
      img: `https://api.dicebear.com/5.x/initials/svg?seed=${fName} ${lName};`,
    });

    const newUser = await dbUser.save();

    return res.status(200).json({
      message: "User create sucessfully",
      sucess: true,
      newUser: newUser,
    });
  } catch (e) {
    return res.status(500).json({
      sucess: false,
      message: "Internal server error",
      error: e.message,
    });
  }
};

// login
exports.login = async (req, res) => {
  try {
    // Fetching email and passoword
    const { email, password } = req.body;

    // Email and password feild empty or not
    if (!email || !password) {
      return res.status(400).json({
        sucess: false,
        message: "Email and password are required",
      });
    }
    //  User exists or not
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        sucess: false,
        message: "User does not exist",
      });
    }

    // Password validation
    const isValid = await bcrypt.compare(password, user.password);

    // Generation of token
    if (isValid) {
      const payload = {
        email: email,
        role: user.role,
        id: user._id,
      };

      const token = await jwt.sign(payload, process.env.JWT_KEY, {
        expiresIn: "3h",
      });

      const options = {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      };

      res.cookie("token", token, options).status(200).json({
        sucess: true,
        message: "Logged in succesfully",
        token:token
      });
    } else {
      return res.status(401).json({
        sucess: false,
        message: "Passoword is incorrect",
      });
    }
  } catch (e) {
    return res.status(500).json({
      sucess: false,
      message: "Internal server error",
      error: e.message,
    });
  }
};

// changePassword
exports.changePassword = async (req, res) => {
  try {
    // Fetch OldPass,NewPass,ConfirmNewPasss
    const { oldPass, newPass, confirmNewPass } = req.body;

    // Check Input field empty or not
    if (!oldPass || !newPass || !confirmNewPass) {
      return res.status(401).json({
        sucess: false,
        message: "Please fill all the fields",
      });
    }

    // Check if oldPassword is valid or not
    const pass = await bcrypt.hash(10, oldPass);

    const user = await User.findOne({ password: pass });

    if (!user) {
      return res.status(400).json({
        sucess: false,
        message: "Old password is incorrect",
      });
    }

    // 2 password match or not
    if (newPass !== confirmNewPass) {
      return res.status(401).json({
        sucess: false,
        message: "Password mismatch",
      });
    }

    // Update password
    const updatedPass = await bcrypt.hash(10, newPass);

    const result = await User.findOneAndUpdate(
      { password: pass },
      {
        password: updatedPass,
      }
    );

    return res.status(200).json({
      sucess: true,
      message: "Password updated successfuly",
      updatedUser: result,
    });
  } catch (e) {
    return res.status(500).json({
      sucess: false,
      message: "Internal server error",
      error: e.message,
    });
  }
};
