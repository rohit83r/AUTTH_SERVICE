const  express  =require("express");
const app = express();
const bodyParser = require("body-parser");

const UserService=require('./services/user-service');




const { PORT } =require("./config/serverConfig");

const apiRoutes = require('./routes/index');

const prepareAndStartServer=()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);

    app.listen(PORT,()=>{
        console.log(`server started on port:${PORT}` );

        // const service = new UserService();
        // // const newToken= service.createToken({email:'rohiert@dtu.com',id:1 });
        // // console.log("new token is: ",newToken);
        // const token=" eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvaGllcnRAZHR1LmNvbSIsImlkIjoxLCJpYXQiOjE3MjI4ODU5NTEsImV4cCI6MTcyMjg4NTk1NH0.97yT_jfQvdWcA8EynIeog-aXD4vKRg9auW2zbNU2RPE";
        // const response =service.verifyToken(token);
        // console.log(response);



    });
}
prepareAndStartServer();
