const Todo=require('../model/todomodel.js')


const createTodo=async(req,res)=>{
    const {text}=req.body;
    const newTodo=await Todo.create({text});
    res.status(201).json({
        message: "todo created",
        todo: newTodo
    })
}

const updateTodo=async(req,res)=>{
    const {_id,text}=req.body;
    const update=await Todo.findByIdAndUpdate(_id, {text},{new: true})
    res.status(201).json({
        message: "todo updated",
        todo: update
    }
    )
}

const getTodo=async(req,res)=>{
   const todo=await Todo.find();
   res.status(200).json({
    message: "todos fetched",
    todos: todo
   })
}
module.exports={
    getTodo,
    createTodo,
    updateTodo,
}