const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This is required'
    },
    desc: {
        type: String,
        required: 'This is required'
    },
    email: {
        type: String,
        required: 'This is required'
    },
    ingredients: {
        type: Array,
        required: 'This is required'
    },
    category: {
        type: String,
        enum: ['Turkish', 'Thai', 'Turkish', 'American', 'Chinese', 'Mexican', 'Indian', 'Spanish', 'Italian', 'Japanese', 'French'],
        required: 'This is required'
    },
    image: {
        type: String,
        required: 'This is required'
    },
});

module.exports = mongoose.model('Recipe', recipeSchema);