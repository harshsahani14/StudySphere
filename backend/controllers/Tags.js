const Tag = require("../models/Tag");

exports.createTag = async(req,res) =>{

    try{

        const {name,description} = req.body;

        if(!name || !description){
            return res.status(401).json({
                message:false,
                message:"Name and description required"
            })
        }

        const tag = new Tag({
            name,
            description
        })

        const result = await tag.save()

        return res.status(200).json({
            sucess:true,
            message:"Tag created succesfully"
        })

    }
    catch(e){
        return res.status(500).json({
            sucess:false,
            message:e.message   
        })
    }
}

exports.getAllTags = async(req,res)=>{

    try{

        const tags = await Tag.find({},{name:true,description:true});

        return res.status(200).json({
            sucess:true,
            tags:tags,
            message:"Tags retrieved sucessfully"
        })
    }
    catch(e){
        return res.status(500).json({
            sucess:false,
            message:e.message   
        })
    }   
    
}