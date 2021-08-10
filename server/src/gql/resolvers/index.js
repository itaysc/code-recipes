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

const Subscription = {
    ...userResolver.subscription
}

module.exports = { Query, Mutation, Subscription };