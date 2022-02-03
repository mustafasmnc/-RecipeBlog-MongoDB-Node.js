const express = require('express');
const router=express.Router();
const receipeController=require('../controllers/recipeController');

/**
 * App Routes
*/
router.get('/',receipeController.homePage);

module.exports=router;
