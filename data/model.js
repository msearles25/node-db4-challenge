const db = require('./dbConfig');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('recipe_details')
        .join('ingredients', 'ingredients.id', 'recipe_details.ingredient_id')
        .select('ingredients.ingredientName', 'recipe_details.ing_quantity')
        .where('recipe_details.recipe_id', recipe_id)   
}

function getInstructions(recipe_id) {
    return db('recipes')
        .select('recipes.instructions')
        .where('id', recipe_id)
}