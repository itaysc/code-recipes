import { ApolloServer, gql } from 'apollo-server-express';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from './resolvers';
import typeDefs from './types';
export const createApolloServer = async(expresApp, httpServer)=>{
    //const typeDefs = gql(fs.readFileSync(path.resolve(__dirname, 'schema.graphql'), {encoding: 'utf8'}))
    const schema = makeExecutableSchema({ typeDefs, resolvers });
    const apolloServer = new ApolloServer({ schema });
    //const apolloServer = new ApolloServer({ typeDefs, resolvers });
    await apolloServer.start();
    apolloServer.applyMiddleware({app: expresApp, path: '/graphql'});


    // create subscription server
    const subscriptionServer = SubscriptionServer.create(
        { schema, execute, subscribe },
        { server: httpServer, path: apolloServer.graphqlPath }
    );

     // Shut down in the case of interrupt and termination signals
    //  ['SIGINT', 'SIGTERM'].forEach(signal => {
    //    process.on(signal, () => subscriptionServer.close());
    //  });

    return apolloServer;
}

