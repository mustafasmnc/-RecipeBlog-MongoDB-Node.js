const express = require('express');
const router=express.Router();
const receipeController=require('../controllers/recipeController');

/**
 * App Routes
*/
router.get('/',receipeController.homePage);
router.get('/categories',receipeController.exploreCategories);

module.exports=router;
