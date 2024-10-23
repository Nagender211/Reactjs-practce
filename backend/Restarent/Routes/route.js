const express=require('express');
const route=express.Router();
const {sendForm,home, updateForm, getUser}=require('../Controller/Controller.js')

route.post('/send',sendForm);
route.post('/user/:id',updateForm)
route.get('/users/:id',home);
route.get('/',getUser)

module.exports=route
