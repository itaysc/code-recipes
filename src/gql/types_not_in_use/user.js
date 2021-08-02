import { makeExecutableSchema } from '@graphql-tools/schema';
import { stitchSchemas } from '@graphql-tools/stitch';
import userResolver from '../resolvers/user';

const _usersSchema = makeExecutableSchema({
    typeDefs:`
        type User {
            _id: String,
            userName: String,
            firstName: String,
            fullName: String,
            lastName: String,
            email: String,
            phone: String,
            isActive: Boolean,
            gender: String,
            createdAt: String,
        }

        type Query {
            getAllUsers: [User],
            getUserByUserName(userName: String!): User
            getUserByEmail(email: String!): User
        }
    `,
    resolvers:{
        Query: userResolver.query,
        Mutation: userResolver.mutation
    }

});

export const usersSchema = { schema: _usersSchema };