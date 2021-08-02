import { ApolloServer, gql } from 'apollo-server-express'
// import fs from 'fs';
// import path from 'path';
import resolvers from './resolvers';
import typeDefs from './types';
export const createApolloServer = async(expresApp)=>{
    //const typeDefs = gql(fs.readFileSync(path.resolve(__dirname, 'schema.graphql'), {encoding: 'utf8'}))
    const apolloServer = new ApolloServer({ typeDefs, resolvers });
    await apolloServer.start();
    apolloServer.applyMiddleware({app: expresApp, path: '/graphql'});
}

