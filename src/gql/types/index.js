
import {mergeTypeDefs} from '@graphql-tools/merge';
import usersSchema from './user';
import recipeSchema from './recipe';

export default mergeTypeDefs([
    usersSchema,
    recipeSchema
])