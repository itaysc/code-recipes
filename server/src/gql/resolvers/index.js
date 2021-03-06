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

export default { Query, Mutation, Subscription };