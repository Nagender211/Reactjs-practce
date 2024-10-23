const express=require('express');
const { getTodo } = require('../controller/todoController');

const route=express.Router();


route.get('/',getTodo);

module.exports=route;