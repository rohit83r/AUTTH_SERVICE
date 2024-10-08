const validateUserAuth = (req,res,next)=>{
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            data:{},
            success:false,
            meassage:"something went wrong",
            err:"Email or password missing in the request"
        })
    }
    next();
}

const validateIsAdminRequest=(req,res,next)=>{
    if(!req.body.id){
        return res.status(400).json({
            data:{},
            success:false,
            meassage:"something went wrong",
            err:"User id is not given"
        })
    }
    next();

}

module.exports={
    validateUserAuth,
    validateIsAdminRequest
}