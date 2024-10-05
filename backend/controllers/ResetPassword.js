const User = require("../models/User");
const bcrypt = require("bcrypt");
const { sendMail } = require("../utils/nodemailer");
const { resetPassEmail } = require("../templates/Email_resetPass")

// resetPasswordStep1
exports.resetPasswordStep1 = async (req, res) => {
  try {
    // Fetch mail
    const { email } = req.body;

    // Validation
    if (!email) {
      return res.status(400).json({
        sucess: false,
        message: "Email is required",
      });
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({
        sucess: false,
        message: "User does not exist",
      });
    }

    // Generate token
    let token = crypto.randomUUID();
    console.log("Reset password token:", token);

    // Save token in User Model
    const result = await User.findOneAndUpdate(
      { email: email },
      {
        token: token,
        expiresIn: Date.now() + 5 * 60 * 1000,
      }
    );

    // Generate link with token at the end
    const link = `http://localhost:3000/updatePassword/${token}`;

    // Send link to mail
    await sendMail(email, `Reset Password for Edtech account`, resetPassEmail(link));

    return res.status(200).json({
      sucess: true,
      message: "Reset password link sent to your email",
    });
  } catch (e) {

    return res.status(500).json({
      sucess: false,
      error: "Internal server error",
      message: e.message,
      
    });
  }
};

// resetPasswordStep2
exports.resetPasswordStep2 = async (req, res) => {
  try {
    // fetch token and new password and confirm new password
    const { token, newPassword, confirmPassword } = req.body;

    // Check token exists
    if (!token) {
      return res.status(401).json({
        sucess: false,
        message: "Token not found",
      });
    }

    // Check token expiration
    const user = await User.findOne({ token: token });

    if (Date.now() > User.expiresIn) {
      return res.status(410).json({
        sucess: false,
        message: "Link expired",
      });
    }

    //  2 passwords match or not
    if (newPassword !== confirmPassword) {
      return res.status(401).json({
        sucess: false,
        message: "Password mismatch",
      });
    }

    // Reset password
    const password = await bcrypt.hash(newPassword,10);

    await User.findOneAndUpdate({ token: token }, { password: password });
    // return response
    return res.status(200).json({
      sucess: true,
      message: "Password reset succesful",
      password: password,
    });
  } catch (e) {
    return res.status(500).json({
      sucess: false,
      message: "Internal server error",
      error: e.message,
    });
  }
};
