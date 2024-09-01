const nodemailer = require("nodemailer");
require("dotenv").config()

exports.sendMail = async ( destination , subject , html) => {

    try{

        const transporter = nodemailer.createTransport(
            {
                host:process.env.HOST,
                auth:{
                user:process.env.USER_MAIL,
                pass:process.env.USER_PASS
            }
        });

        const result = await transporter.sendMail({

            from:process.env.USER_MAIL,
            to:destination,
            subject:`${subject}`,
            html:`${html}`
        })

        console.log(result);
    }
    catch(e){
        console.log("Error in mail sending",e.message);
    }

}