const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
app.use(express.json());

const database=[{
    email:"jatin123@gmail.com",
    password:"98765"
}]
app.post("/login",(req,res)=>{
    const userInfo=req.body;
    const exist = database.some(user=>user.email===userInfo.email && user.password===userInfo.password);
  if(exist){
    res.status(200).json({message:"User Found in the database"})
  }else{
    res.status(404).json({message:"User does not exist"});
  }
})
app.post("/signup",(req,res)=>{
    const userInfo= req.body;
    const exist = database.some(user=>user.email===userInfo.email && user.password===userInfo.password);
    if(!exist){
        database.push(userInfo);
        res.status(200).json({message:"Registration Successful"})}
        else{
            res.status(403).json({message:"User Already exist"});
        }
    }
)
app.listen(3000,()=>{
    console.log("Server is running");
})