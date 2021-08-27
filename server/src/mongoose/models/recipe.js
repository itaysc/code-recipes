import mongoose from 'mongoose';
const Schama = mongoose.Schema;

const ThumbSchema = new Schama({
    userId:{ type : mongoose.ObjectId,  ref: 'User', required:true },
    direction: {type: String, enum:["up","down"], required: true}
})
const RecipeSchema = new Schama({
    userId: {
        type : mongoose.ObjectId, 
        ref: 'User',
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
    thumbs:{
        type: [ThumbSchema],
        default: []
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
    const user = await User.findOne({_id: recipe.userId});
    if(user){
        console.log("user was found. updating recipes")
        user.recipes.push(recipe._id);
        await user.save();
    }
    //next();
});
RecipeSchema.post('deleteOne', { query: true, document: true }, async function(next) {
    var q = this;
    const User = mongoose.model('user');
    console.log("@@@@@@@@@@@@@@@@@@ deleting recipe from user ", q._conditions._id)
    await User.updateOne({userName: recipe.userName}, {
        $pull:{recipes: q._conditions._id}
    });
    next();
});


const Recipe = mongoose.model('recipe', RecipeSchema);
export default Recipe;