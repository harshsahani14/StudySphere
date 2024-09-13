const nodeMailer = require('../utils/nodemailer');

exports.contactUs = async(req,res)=>{

    try{
        // get data
        const {firstName,lastName,emailId,phoneNo,message} = req.body;

        // validate
        if(!firstName || !lastName || !emailId || !phoneNo || !message){
            return res.status(401).json({
                sucess:false,
                message:"Fill all details"
            })
        }

        // send mail to Owner
        const mailToOwner = await nodeMailer("harshsahani078@gmail.com",`Grievance mail from EdTech`,message);

        // send mail to user that we have received his mail
        const mailToUser = await nodeMailer(emailId,`Grievance mail received by EdTech`, `Hi ${firstName} ${lastName},this is to inform you that we have successfully received your grievance mail you submitted on EdTech platform`);

        // return response
        return res.status(200).json({
            sucess:true,
            message:"Mail sent to owner regarding greivance"
        })
    }
    catch(e){
        return res.status(500).json({
            sucess:false,
            message:"Internal server error",
            error:e.message   
        })
    }
}