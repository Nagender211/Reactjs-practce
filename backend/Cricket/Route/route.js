const express=require('express')

// import {getScore} from './controllers/getScore';
const {getScore} = require('../Controller/controller.js')


const route=express.Router();


route.get('/send-score',getScore)

module.exports=route