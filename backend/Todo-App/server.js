const express=require('express')
const mongoose=require('mongoose');
const cors=require('cors')
const app=express();


const route=require('./route/todoRoute.js')
const dbConnectiuon=require('./dataBaseConnection/dbCconnection.js');

app.use(cors({
    origin:'http://localhost:3000',
    credentials:true,
    // allowedHeaders:['Origin','X-Requested-With','Content-Type','Accept','Authorization']
 }));
app.use(express.json());

app.use('/',route)

// }))

dbConnectiuon();
const PORT=8000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})