const validateUserAuth = (req,res,next)=>{
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            data:{},
            success:false,
            meassage:"something went wrong",
            err:"Email or passwors missing in the request"
        })
    }
    next();
}

module.exports={
    validateUserAuth
}