const express= require('express');

const router=express.Router();
const homecontroller= require('../controllers/home_controller'); //getting object from home
const { route } = require('./profile');


console.log("router loaded");

//all forther routes will get accessed from here
router.get('/',homecontroller.home);
router.use('/users',require('./users')); //syntex: router.use('/url',require(./routefilename));
router.use('/likes',require('./profile'));


module.exports = router;
