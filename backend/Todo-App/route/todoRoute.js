const express=require('express');
const { getTodo, createTodo, updateTodo } = require('../controller/todoController');

const route=express.Router();

route.post('/todo',createTodo);
route.post('/update', updateTodo)
route.get('/',getTodo);

module.exports=route;