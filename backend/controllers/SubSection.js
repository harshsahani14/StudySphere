const Section  = require("../models/Section");
const Video = require("../models/Video");
const assetUploadToCloud = require("../utils/assetUploadToCloud");
require("dotenv").config();


exports.createSubSection = async(req,res)=>{
    try{

        // data fetch
        const {sectionId,title,description,duration} = req.body;

        const video = req.files.video
        // data validation
        if(!sectionId || !title || !description || !duration || !video){
            return res.status(401).json({
                sucess:false,
                message:"Please fill all the fields"
            })
        }  

        // upload video on cloudinary
        const uploadedVideo = await assetUploadToCloud(video,process.env.cloudDbFolder);

        // create Video object
        const videoObj = new Video({
            title,
            description,
            duration,
            videoUrl:uploadedVideo.secureUrl
        })

         // save video object in the db
        const dbVideo = await videoObj.save();

        // store id of the object in its mapped section
        const updatedSection = await Section.findByIdAndUpdate(sectionId, { $push:{ subSections : dbVideo._id }},{new:true}) 

        // return response
        return res.status(200).json({
            sucess:true,
            message:"SubSection created successfuly",
            subSection:dbVideo,
            updatedSection:updatedSection
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

// update subsection

// delete subsection