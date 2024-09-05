const jwt = require("jsonwebtoken")

require("dotenv").config();
// ValidToken 
exports.isvalidToken = async (req,res,next) => {

    try{
        // Fetch token
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ","");
        // check if it exsits
        if(!token){
            return res.status(401).json({
                suncess:false,
                message:"Token not found"
            })
        }

        // validate token
        try{
            const decodedToken = await jwt.verify(token,process.env.JWT_KEY);

            req.decodedToken = decodedToken;
            // pass request to next middleware
            next();
        }
        catch(e){
            return res.status(401).json({
                suncess:false,
                message:"Invalid token"
            })
        }
        

    }
    catch(e){
        return res.status(500).json({
            message:e.message,
            sucess:false
        })
    }
}

// isStudent
exports.isStudent = (req,res,next) => {

    try{
        if(req.decodedToken.role !== "student"){
            return res.status(404).json({
                sucess:false,
                message:"You are not authorized to view this page"
            })
        }
        next();
    }catch(e){
        return res.status(500).json({
            sucess:false,
            message:e.message
        })
    }
}

// isInstructor
exports.isInstructor = (req,res,next) => {

    try{
        if(req.decodedToken.role !== "instructor"){
            return res.status(404).json({
                sucess:false,
                message:"You are not authorized to view this page"
            })
        }
        next();
    }catch(e){
        return res.status(500).json({
            sucess:false,
            message:e.message
        })
    }
}

// isAdmin
exports.isAdmin = (req,res,next) => {

    try{
        if(req.decodedToken.role !== "admin"){
            return res.status(404).json({
                sucess:false,
                message:"You are not authorized to view this page"
            })
        }
        next();
    }catch(e){
        return res.status(500).json({
            sucess:false,
            message:e.message
        })
    }
}