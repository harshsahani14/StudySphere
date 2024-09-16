const Category = require("../models/Category");
const Course = require("../models/Course");

exports.createCategory = async(req,res) =>{

    try{

        const {name,description} = req.body;

        if(!name || !description){
            return res.status(401).json({
                message:false,
                message:"Name and description required"
            })
        }

        const tag = new Category({
            name,
            description
        })

        const result = await tag.save()

        return res.status(200).json({
            sucess:true,
            message:"Category created succesfully"
        })

    }
    catch(e){
        return res.status(500).json({
            sucess:false,
            message:e.message   
        })
    }
}

exports.getAllCategories = async(req,res)=>{

    try{

        const category = await Category.find({},{name:true,description:true});

        return res.status(200).json({
            sucess:true,
            category:category,
            message:"Categories retrieved sucessfully"
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

// getCategoryPageDetails

exports.getCategoryPageDetails = async(req,res)=>{

    try{
        // get categoryId
        const{categoryId} = req.body;

        // validate
        if(!categoryId){
            return res.status(400).json({
                sucess:false,
                message:"Category id is required"
            })
        }

        // get courses for the category
        const categoryCourses = await Category.findById(categoryId)
                                        .populate({
                                                path:"courses"
                                                , populate:{
                                              
                                                    path:"instructor"
                                                }});
         
        if(!categoryCourses){
            return res.status(400).json({
                sucess:false,
                message:"Invalid category id"
            })
        }                                        

        // get courses for that category whose id is not equal to categoryId
        const topCourses = await Category.find({_id:{$ne:categoryId}})
                                        .populate({
                                                    path:"courses"
                                                    , populate:{
                                                
                                                        path:"instructor"
                                                    }});

        // get top selling courses 
        const topSellingCourses = await Course.find({}).sort({studentsEnrolled:-1});

        // return response
        return res.status(200).json({
            sucess:true,
            message:"Category page Details fetched successfully",
            categoryCourses:categoryCourses,
            topCourses:topCourses,
            topSellingCourses:topSellingCourses
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