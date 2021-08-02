import recipeService from '../../services/recipe';
const service = recipeService();
console.log("*****   ", typeof service)
module.exports =  {
    query:{
        getAllRecipes: async(root, {})=>{
            const res = await service.getAllRecipes();
            return res.payload;
        },
        getRecipesByUserName: async(root, {userName})=>{
            const res = await service.getRecipesByUserName(userName);
            return res.payload;
        }
    },
    mutation:{
        createRecipe: async(root, {input})=>{
            console.log("inside mutation")
            const res = await service.createRecipe(input);
            return res.payload;
        },
        deleteRecipeById: async(root, {id})=>{
            const res = await service.deleteRecipeById(id);
            return res.payload;
        }
    }
}