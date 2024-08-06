const UserService = require("../services/user-service");

const userService = new  UserService();

const create = async(req,res)=>{
    try {
        const response = await userService.create({
            email:req.body.email,
            password:req.body.password
        }); 
        return res.status(201).json({
            data:response,
            err:{},
            success:true,
            message:"successfully created a new user"
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:[],
            err:error,
            success:false,
            meassage:"something went wrong while creating a new user"
        })
        
    }
}

const signIn = async(req,res)=>{
    try {
        const response = await userService.signIn(req.body.email,
            req.body.password); 
        return res.status(201).json({
            data:response,
            err:{},
            success:true,
            message:"successfully signIn"
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:[],
            err:error,
            success:false,
            meassage:"something went wrong while signing Inr"
        })
        
    }
}

const isAuthenticated = async (req,res)=>{
    try {
        const token = await req.headers['x-access-token'];
        const response = await  userService.isAuthenticated(token);
        return res.status(200).json({
            data:response,
            err:{},
            success:true,
            message:"user is authenticated and token is valid"
        });        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:[],
            err:error,
            success:false,
            meassage:"something went wrong while signing In"
        })
        
    }
}

const isAdmin = async (req,res)=>{
    try {
        const response =await userService.isAdmin(req.body.id);
        return res.status(200).json({
            data:response,
            err:{},
            success:true,
            message:"Successfully fetched whether useer is admin or not"
        });        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:[],
            err:error,
            success:false,
            meassage:"something went wrong"
        })
        
    }
}



module.exports={
    create,
    signIn,
    isAuthenticated,
    isAdmin
}