const  express  =require("express");
const app = express();

const { PORT } =require("./config/serverConfig")

const prepareAndStartServer=()=>{

    app.listen(PORT,()=>{
        console.log(`server started on port:${PORT}` );
    });
}
prepareAndStartServer();
