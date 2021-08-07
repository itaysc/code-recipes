import config from '../config';
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from 'apollo-boost';
import gql from 'graphql-tag';
const token = "test";
const authLink = new ApolloLink((operation, forward)=>{
    operation.setContext({
        headers:{
            'Authorization': 'Bearer ' + token
        }
    })
    return forward(operation);
})

export const apolloClient = new ApolloClient({
    link: ApolloLink.from([
        authLink,
        new HttpLink({ uri: config.API_URL }),
    ]),  
    cache: new InMemoryCache()
})

