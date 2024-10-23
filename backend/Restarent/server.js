const express=require('express')
const app=express();
const dbConnection=require('./dataBaseConnection/dbconncetion.js')
const route=require('./Routes/route.js')
const PORT=8080;

app.use(express.json())

app.use('/',route)

dbConnection();
app.listen(PORT, ()=>(
    console.log(`Server running on port ${PORT}`)  
))