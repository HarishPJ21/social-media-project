const express= require('express');

const router=express.Router();
const homecontroller= require('../controllers/home_controller'); //getting object from home


console.log("router loaded");

//all forther routes will get accessed from here
router.get('/',homecontroller.home);
router.use('/users',require('./users')); //syntex: router.use('/url',require(./routefilename));



module.exports = router;
