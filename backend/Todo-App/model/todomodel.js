const mongoose=require('mongoose')
const todoSchmema=new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
})

module.exports=mongoose.model('Todo', todoSchmema)