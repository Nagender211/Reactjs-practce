const express=require('express');
const route = require('./Route/route.js');

const app=express();


app.use(express.json())

app.use('/',route)
const PORT=8080
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
