const express=require('express');
const route = require('./Route/route.js');
const cors = require('cors');
const PORT=8080
const app=express();
app.use(cors());  


app.use(express.json())

app.use('/',route)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
