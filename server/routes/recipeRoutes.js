const express = require('express');
const router=express.Router();
const receipeController=require('../controllers/recipeController');

/**
 * App Routes
*/
router.get('/',receipeController.homePage);
router.get('/recipe/:id',receipeController.exploreRecipe);
router.get('/categories',receipeController.exploreCategories);
router.get('/categories/:id',receipeController.exploreCategoriesById);
router.post('/search',receipeController.searchRecipe);
router.get('/explore-latest',receipeController.exploreLatest);
router.get('/explore-random',receipeController.exploreRandom);

module.exports=router;
