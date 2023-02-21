const express  = require("express");

const router=express.Router();

const userscontroller= require('../controllers/users-controller');

router.get('/profile',userscontroller.profile);

module.exports=router

