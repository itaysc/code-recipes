
import {mergeTypeDefs} from '@graphql-tools/merge';
import userSubscriptions from './user';

export default mergeTypeDefs([
    userSubscriptions
])