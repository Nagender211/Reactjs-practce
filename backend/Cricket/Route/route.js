const express=require('express')

// import {getScore} from './controllers/getScore';
const {getScore} = require('../Controller/controller.js')


const route=express.Router();


route.get('/cricket-scores',getScore)

module.exports=route