
const express=require('express')
const app=express();
const route=require('./route/todoRoute.js')



app.use(express.json());
app.use('/',route)

const PORT=8000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})