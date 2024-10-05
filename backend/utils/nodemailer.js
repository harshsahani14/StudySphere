const nodemailer = require("nodemailer");
require("dotenv").config()

exports.sendMail = async ( destination , subject , html) => {

    try{

        const transporter = nodemailer.createTransport(
            {
                host:process.env.MAIL_SERVICE,
                auth:{
                user:process.env.MAIL_HOST,
                pass:process.env.MAIL_PASS
            }
        });

        const result = await transporter.sendMail({

            from:process.env.MAIL_HOST,
            to:`${destination}`,
            subject:`${subject}`,
            html:`${html}`
        })

        console.log(result);
    }
    catch(e){
        console.log("Error in mail sending",e.message);
    }

}