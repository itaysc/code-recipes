import userResolver from './user';

console.log(userResolver.mutation)
const Query = {
    ...userResolver.query
}


const Mutation = {
    ...userResolver.mutation
}

module.exports = { Query, Mutation };