const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();
dotenv.config( {path: './config.env'} );
const PORT = process.env.PORT;
// require('./conn');
const User=require('./userSchema')
app.use(cors());
app.use(express.json());
app.use(require('./auth'))
app.get("/", (req, res) => {
    res.send("This Is Home page");
});
app.get("/upload", (req, res) => {
    // res.cookie("Test", 'Rishu');
    res.send("This is Registration Page");
});
app.get("/postview",async (req, res) => {
   try{
    await User.find({}).then(data=>{
        res.send({status:"Ok",data:data})
    })
   }catch(error){
    
   }
});
app.listen(PORT, () => {
    console.log("server is running at port no",process.env.PORT );
})