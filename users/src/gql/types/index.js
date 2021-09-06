
import {mergeTypeDefs} from '@graphql-tools/merge';
import usersSchema from './user';
import subscriptions from './subscriptions';

export default mergeTypeDefs([
    usersSchema,
    subscriptions
])