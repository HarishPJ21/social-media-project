const express = require("express");

const router=express.Router();

const profilecontroller=require("../controllers/profile_controller");

router.get('/likes',profilecontroller.social_Data);

module.exports=router