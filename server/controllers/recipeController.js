require('../models/database');
const Category = require('../models/Category');
const Recipe = require('../models/Recipe');

/**
 * GET /
 * HomePage 
*/
exports.homePage = async (req, res) => {
    try {
        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);

        const latest = await Recipe.find({}).sort({ _id: -1 }).limit(limitNumber);
        const turkish = await Recipe.find({ 'category': 'Turkish' }).limit(limitNumber);
        const american = await Recipe.find({ 'category': 'American' }).limit(limitNumber);
        const thai = await Recipe.find({ 'category': 'Thai' }).limit(limitNumber);

        const food = { latest, turkish, american, thai };
        res.render('index', { title: 'Cooking Blog - Home', categories, food });
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Occured" });
    }

}

/**
 * GET /categories
 * Categories 
*/
exports.exploreCategories = async (req, res) => {
    try {
        const limitNumber = 20;
        const categories = await Category.find({}).limit(limitNumber);
        res.render('categories', { title: 'Cooking Blog - Categories', categories });
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Occured" });
    }

}

/**
 * GET /categories/:id
 * Categories by id
*/
exports.exploreCategoriesById = async (req, res) => {
    try {
        let categoryId = req.params.id;
        const limitNumber = 20;
        const categoryById = await Recipe.find({ 'category': categoryId }).limit(limitNumber);
        res.render('categories', { title: 'Cooking Blog - Categories', categoryById });
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Occured" });
    }

}


/**
 * GET /recipe/:id
 * Recipe 
*/
exports.exploreRecipe = async (req, res) => {
    try {
        let recipeId = req.params.id;
        const recipe = await Recipe.findById(recipeId);
        res.render('recipe', { title: 'Cooking Blog - Recipe', recipe });
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Occured" });
    }

}



// async function insertDymmyCategoryData(){
//     try {
//         await Category.insertMany([
//             {
//                 "name":"Turkish",
//                 "image":"turkish-food.jpg"
//             },
//             {
//                 "name":"Thai",
//                 "image":"thai-food.jpg"
//             },
//             {
//                 "name":"American",
//                 "image":"american-food.jpg"
//             },
//             {
//                 "name":"Chinese",
//                 "image":"chinese-food.jpg"
//             },
//             {
//                 "name":"Mexican",
//                 "image":"mexican-food.jpg"
//             },
//             {
//                 "name":"Indian",
//                 "image":"indian-food.jpg"
//             },
//             {
//                 "name":"Spanish",
//                 "image":"spanish-food.jpg"
//             },
//         ]);
//     } catch (error) {
//         console.log(`error: ${error}`);
//     }
// }

// insertDymmyCategoryData();


// async function insertDymmyRecipeData() {
//     try {
//         await Recipe.insertMany([
//             {
//                 "name": "Yaprak Sarması",
//                 "desc": `Rinse the rice well.
//                 Heat some olive oil in a pan. Add the rice and fry shortly. Add the tomato and pepper paste and stir everything together well. Fry for about a minute.
//                 Add parsley, paprika powder, mint, pepper, and salt. Use a bit more than you would usually do because in the boiling process, part of the flavor will evaporate. Stir well and take the pan off the heat. You are going to fill the vine leaves with uncooked rice. The rice will be cooked later with the vine leaves. Leave the mixture to cool down.
//                 In the meantime, take the vine leaves from the package and carefully take them apart. Rinse them one by one.
//                 Put all the leaves in a pan with boiled water (not on the stove) and leave them for five minutes. Drain.
//                 Take a large pan and put some olive oil on the bottom. Put a few broken vine leaves on the bottom of the pan. This will stop the yaprak sarma from sticking to the pan.
//                 Now you can start rolling the vine leaves. Use a cutting board to put the vine leaves on. On one side of the board, put the pan with the rice mixture and put a plate with vine leaves and on the other side to put the yaprak sarma in.
//                 Take a vine leave and put it on the cutting board with the veins up. Cut or break the stem off carefully. Put a little bit of the rice mixture onto the bottom of the leaf. Make sure you leave some space between the rice and the end of the leaf. Take the two lowest ends of the leaf and fold them over the rice. Do the same for the left and the right end of the leaf. Then roll up the leaf tightly from the bottom to the top. The first ones will be a bit difficult, but after a few you will know how to do it.
//                 Put the sarma into the pan and repeat the same steps for the other vine leaves. Make sure that you put the yaprak sarma close to each other in the pan. If they are too loose, the rolls can open while cooking. If the bottom of the pan has been filled, you can put the next sarma on top of the others.
//                 When you have finished all the sarmas, cut a lemon into slices. Put the slices on top of the sarmas and put a plate, turned upside-down on top of that. This will prevent the sarmas from opening while boiling.
//                 Mix boiling water with a tablespoon of tomato paste and a stock cube. Pour the water into the pan until the plate is just under water. Put the pan on the stove and bring to boil.
//                 Leave the sarmas to simmer for 45 minutes on low heat. It is important that you use a pan that is big enough because the sarmas will get bigger while boiling. The rice increases in volume when it is cooked.
//                 Turn off the heat after 45 minutes and leave the sarmas in the pan with a lid on (without draining the water) for at least 30 more minutes.`,
//                 "email": "cookingblog@gmail.com",
//                 "ingredients": [
//                     "1 package of vine leaves (see notes)",
//                     "2 3/4 cups white rice",
//                     "2 tablespoons tomato paste, divided",
//                     "1 tablespoon pepper paste or additional tablespoon of tomato paste",
//                     "1 lemon, sliced",
//                     "Fresh parsley",
//                     "Paprika powder",
//                     "Dried mint",
//                     "Pepper and salt",
//                     "1 vegetable stock cube",
//                 ],
//                 "category": "Turkish",
//                 "image": "yaprak-sarmasi.jpg"
//             },
//             {
//                 "name": "Chicken pad Thai",
//                 "desc": `Soak the noodles in warm water for about 20 mins or until al dente, then drain. Meanwhile, make the sauce by mixing together the tamarind paste, fish sauce, sugar, lime and siracha until smooth.
//                 Heat half the oil in a frying pan or a wok over a medium heat. Add the garlic and chilli and fry for 30 seconds until fragrant. Tip in the chicken and cook for 5 mins until golden. Add the coriander stalks, spring onions and turnip (if using), and fry for 1 min. Add in the soaked noodles, 50ml of the chicken stock and the prepared sauce. Keep stir-frying the noodles until they’re starting to dry, then add the sauce. Stir everything together and cook over a high heat for 3 mins until the noodles are just cooked. Add a splash more water if needed.
//                 When the sauce has reduced, scatter over the beansprouts and fold them into the noodles. Push everything to one side of the pan, then pour in the rest of the oil on the empty side and crack in the eggs. Fry for 2 mins until the white is just set and beginning to crisp around the edges, then roughly scramble the runny yolks in with the whites. When the eggs have just set, combine with the noodles.
//                 Scatter over half of the peanuts and quickly toss together. Divide between two plates with the remaining peanuts and spring onion, the lime wedges and soy sauce on the side. `,
//                 "email": "cookingblog@gmail.com",
//                 "ingredients": [
//                     "150g dried flat rice noodles",
//                     "4 tbsp sunflower oil",
//                     "2 garlic cloves , crushed",
//                     "1 red chilli , finely chopped",
//                     "2 chicken breasts, sliced finely sliced",
//                     "½ small pack coriander , leaves picked, and stalks finely chopped",
//                     "60g spring onions , shredded (reserving some to serve)",
//                     "2 tbsp chopped pickled turnip (optional)",
//                     "50ml chicken stock",
//                     "100g beansprouts",
//                     "2 eggs",
//                     "60g roasted unsalted peanuts , chopped",
//                     "soy sauce , to serve",
//                     "fresh red chilli , sliced, to serve (optional)",
//                     "For the sauce",
//                     "2 tbsp tamarind paste",
//                     "2 tbsp fish sauce",
//                     "1 tbsp light brown soft sugar",
//                     "1 lime , half juiced, half cut into wedges to serve",
//                     "½ tbsp siracha",
//                     "pinch chilli powder (optional)",

//                 ],
//                 "category": "Thai",
//                 "image": "chicken-pad-thai.jpg"
//             },
//         ]);
//     } catch (error) {
//         console.log(`error: ${error}`);
//     }
// }

// insertDymmyRecipeData();