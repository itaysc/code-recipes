import userResolver from './user';
import recipeResolver from './recipe';
console.log(userResolver.mutation)
const Query = {
    ...userResolver.query,
    ...recipeResolver.query
}


const Mutation = {
    ...userResolver.mutation,
    ...recipeResolver.mutation
}

module.exports = { Query, Mutation };