const mongoose = require('mongoose');
const Schama = mongoose.Schema;
const RecipeSchema = new Schama({
    userName: {
        type: String,
        trim: true,
        required: true,
        index: true
      },
    title: {
        type: String,
        min: [2, 'Title should be at least 2 characters long'],
        required: true
    },
    description: {
        type: String,
        min: [2, 'Description should be at least 2 characters long'],
        required: true
    },
    code: {
        type: String,
        min: [5, 'Code should be at least 2 characters long'],
        required: true
    },
    language: {
        type: String,
        min: [2, 'Language should be at least 2 characters long'],
        required: true
    },
    updatedAt:{
        type: Date,
    },
    createdAt:{
        type: Date,
        default: new Date(),
    },
})

// static funcrtions
RecipeSchema.statics.findByUserName = function(userName) {
    return this.find({ userName });
};

// hooks
RecipeSchema.post('save', async function(next) {
    var recipe = this;
    const User = mongoose.model('user');
    const user = await User.findOne({userName: recipe.userName});
    if(user){
        console.log("user was found. updating recipes")
        user.recipes.push(recipe._id);
        await user.save();
    }
    next();
});
RecipeSchema.pre('delete', async function(next) {
    var recipe = this;
    const User = mongoose.model('user');
    console.log("@@@@@@@@@@@@@@@@@@ deleting recipe from user")
    await User.updateOne({userName: recipe.userName}, {
        $pull:{recipes: recipe._id}
    });
    next();
});


const Recipe = mongoose.model('recipe', RecipeSchema);
module.exports = Recipe;