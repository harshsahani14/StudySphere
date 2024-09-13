const cloudinary = require('cloudinary').v2;
require('dotenv').config()

exports.cloudinarySetup = async ()=>{

    try{
        cloudinary.config({
            cloud_name:process.env.CLOUD_NAME,
            api_key:process.env.cloudinary_APIKEY,
            api_secret:process.env.cloudinary_APISECRET, 
        })
    }
    catch(e){
        console.log(e.message)
    }
}