const Section = require("../models/Section");
const Course = require("../models/Course");

exports.createSection = async(req,res) => {

    try{

        // data fetch
        const {sectionName,courseId} = req.body;

        // data validation
        if(!sectionName || !courseId){
            return res.status(401).json({
                sucess:false,
                message:"Please fill all the fields"
            })
        }

        // create section
        const section = new Section({
            name:sectionName
        });

        // save section in db
        const dbSection = await section.save();

        // push the section in the course
        const updatedCourse = await Course.findByIdAndUpdate(courseId, { $push:{ content : dbSection._id }} );

        // return response
        return res.status(200).json({
            sucess:true,
            message:"Section created successfuly",
            updatedCourse:updatedCourse
        })

    }
    catch(e){
        return res.status(500).json({
            sucess:false,
            message:"Internal servor error",
            error:e.message   
        })
    }
}

exports.updateSection = async (req,res) => {

    try{

        // data fetch
        const {sectionName,sectionId} = req.body;

        // data validation
        if(!sectionName || !sectionId){
            return res.status(401).json({
                sucess:false,
                message:"Please fill all the fields"
            })
        }

        // update section name of the given section
        const updatedSection = await Section.findByIdAndUpdate(sectionId, {name:sectionName});

        // return response
        return res.status(200).json({
            sucess:true,
            message:"Section updated successfuly",
            updatedSection:updatedSection
        })
    }
    catch(e){

        return res.status(500).json({
            sucess:false,
            message:"Internal servor error",
            error:e.message   
        })
    }
}

exports.deleteSection = async(req,res) =>{

    try{
        // data fetch
        const {sectionId} = req.params;

        // data validation
        if(!sectionId){
            return res.status(401).json({
                sucess:false,
                message:"Please fill all the fields"
            })
        }


        // delete section based on id
        const deletedSection = await Section.findByIdAndDelete(sectionId)
        // return response
        return res.status(200).json({
            sucess:true,
            message:"Section deleted successfuly",
            deletedSection:deletedSection
        })
    }
    catch(e){
        return res.status(500).json({
            sucess:false,
            message:"Internal servor error",
            error:e.message   
        })
    }
}