
import {mergeTypeDefs} from '@graphql-tools/merge';
import usersSchema from './user';
import recipeSchema from './recipe';
import subscriptions from './subscriptions';

export default mergeTypeDefs([
    usersSchema,
    recipeSchema,
    subscriptions
])