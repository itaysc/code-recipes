import { Recipe } from '../../mongoose/models';

export default () => {
    return {
        getAllRecipes : ()=>{
            return new Promise(async(resolve, reject)=>{
                try{
                    const recipes = await Recipe.find({});
                    return resolve({status: 200, payload: recipes});
                }catch(err){
                    reject({status: 500, payload: err});
                }
            })
        },
        getRecipesByUserName: (userName)=>{
            return new Promise(async(resolve, reject)=>{
                try{
                    const recipes = await Recipe.find({userName});
                    return resolve({status: 200, payload: recipes});
                }catch(err){
                    reject({status: 500, payload: err});
                }
            })
        },
        createRecipe: (data)=>{
            return new Promise(async(resolve, reject)=>{
                try{
                    const recipe = new Recipe({...data});
                    await recipe.save();
                    return resolve({status: 200, payload: recipe});
                }catch(err){
                    console.log(err)
                    reject({status: 500, payload: err});
                }
            })
        },

        deleteRecipeById: (id)=>{
            return new Promise(async(resolve, reject)=>{
                try{
                    const res = await Recipe.deleteOne({_id: id});
                    return resolve({status: 200, payload: id});
                }catch(err){
                    reject({status: 500, payload: err});
                }
            })
        },
        addThumbUp: (id)=>{
            return new Promise(async(resolve, reject)=>{
                try{
                    const res = await Recipe.updateOne({_id: id}, {
                        $inc:{thumbsUp: 1}
                    });
                    return resolve({status: 200, payload: res});
                }catch(err){
                    reject({status: 500, payload: err});
                }
            })
        },
        addThumbDown: (id)=>{
            return new Promise(async(resolve, reject)=>{
                try{
                    const res = await Recipe.updateOne({_id: id}, {
                        $inc:{thumbsUp: -1}
                    });
                    return resolve({status: 200, payload: res});
                }catch(err){
                    reject({status: 500, payload: err});
                }
            })
        },
    };
};
