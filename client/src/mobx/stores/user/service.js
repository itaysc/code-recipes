import config from '../../../config';
import gql from 'graphql-tag';
import { apolloClient } from '../../../apollo';
import * as queries from '../../queries/user';
const { API_URL } = config;
const basicHeaders = {
    "Content-Type": "application/json",
}

class UserService{
    getAllUsers = async()=>{
        const {data: {users}} = await apolloClient.query({
            query: queries.getAllUsers, 
            variables: {}, 
            fetchPolicy: 'no-cache'})
        return Promise.resolve(users);
    }

    createUser = async(input)=>{
        const {data: {user}} = await apolloClient.mutate({
            mutation: queries.createUser,
            variables: {input},
            update: (cache, mutationResult)=>{ // this runs after mitation and lets us change the cache
                // console.log(mutationResult.data)
                cache.writeQuery({query: queries.getAllUsers, variables: {}, data})
            }
        
        })
        return Promise.resolve(user);
    }
}

export default UserService;