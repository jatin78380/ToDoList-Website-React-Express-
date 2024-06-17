const express = require('express')
const app = express()
const cors = require('cors');
const { createTodo } = require('./types');
const { todo } = require('./db');
app.use(cors());
app.use(express.json());

app.post("/todo",async (req,res)=>{
   const createPayload = req.body;
   const validPayload = createTodo.safeParse(createPayload);
  if(!validPayload.success){
    res.status(400).json({message:"You sent the wrong inputs"})
   }
   await todo.create({
    title: createPayload.title,
    description: createPayload.description,
     completed: false
   });
   res.status(200).json({message:"Todo Created"})
})
app.get("/todos",async(req,res)=>{
   const todos = await todo.find({});

   res.json({todos})
})
app.put("/completed",async (req,res)=>{
  const updatePayload = req.body;
  const validPayload = updateTodo.safeParse(updatePayload);
  if(!validPayload.success){
    res.status(400).json({message:"You sent the wrong inputs"})
    return;
   }

   await todo.update({
    _id: req.body._id,
   },{
    completed: true
   }
  )
  res.json({message:"Todo  marked as Completed"})


})
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