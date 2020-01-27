const recipe = require('./data/model');

recipe.getInstructions(1).then(res => {
    console.log(res)
    process.exit();
})