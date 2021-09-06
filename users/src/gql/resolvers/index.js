import userResolver from './user';
const Query = {
    ...userResolver.query,
}


const Mutation = {
    ...userResolver.mutation,
}

const Subscription = {
    ...userResolver.subscription
}

export default { Query, Mutation, Subscription };