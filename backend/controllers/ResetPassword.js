const User = require("../models/User");
const bcrypt = require("bcrypt");
const sendMail = require("../config/nodemailer")

// resetPasswordStep1
exports.resetPasswordStep1 = async(req,res) =>{

    try{
        // Fetch mail
        const {email} = req.body;

        // Generate token
        let token = self.crypto.randomUUID();
        console.log("Reset password token:",token);

        // Save token in User Model
        const result = await User.findOneAndUpdate({email:email},{
            token:token,
            expiresIn:Date.now()+5*60*1000
        })

        // Generate link with token at the end
        const link = `http://localhost:3000/updatePassword/${token}`

        // Send link to mail
        await sendMail(email , `Reset Password`,`Go to ${link} to rest password`);

        return res.status(200).json({
            sucess:true,
            message:"Reset password link sent to your email"
        })
    }
    catch(e){
        return res.status(500).json({
            sucess:false,
            message:e.message   
        })
    }
}

// resetPasswordStep2
exports.resetPasswordStep2 = async (req,res) =>{
    try{
        // fetch token and new password and confirm new password
        const {token,newPassword,confirmPassword} = req.body;

        // Check token exists
        if(!token){
            return res.status(401).json({
                sucess:false,
                message:"Token not found"
            })
        }

        // Check token expiration
        const user = await User.findOne({token:token});

        if(Date.now() > User.expiresIn){
            return res.status(410).json({
                sucess:false,
                message:"Link expired"
            })
        }

        //  2 passwords match or not
        if(newPassword !== confirmPassword){
            return res.status(401).json({
                sucess:false,
                message:"Password mismatch"
            })
        }

        // Reset password
        const password = await bcrypt.hash(10,newPassword);

        await User.findOneAndUpdate({token:token},{ password:password },{new:true});
        // return response
        return res.status(200).json({
            sucess:true,
            message:"Password reset succesful"
        })
    }
    catch(e){
        return res.status(500).json({
            sucess:false,
            message:e.message   
        })
    }
}