import config from '../../../config';
import gql from 'graphql-tag';
import { apolloClient } from '../../../apollo';
const { API_URL } = config;
const basicHeaders = {
    "Content-Type": "application/json",
}
const userFields = `
    _id,
    firstName,
    lastName
    fullName,
    email,
    phone,
    isActive,
    gender,
    createdAt
`;
class UserService{
    getAllUsers = async()=>{
        const query = gql`
            query getAllUsers{
               users: getAllUsers {
                    ${userFields}
                }
            }
        `;
        const {data: {users}} = await apolloClient.query({query, variables: {}})
        return Promise.resolve(users);
    }

    createUser = async(input)=>{
        const mutation = gql`
        mutation createUser($input: CreateUserInput) {
            user: createUser(input: $input) {
              _id
              firstName
              lastName
              firstName
              email
              phone
              gender
              createdAt
              isActive
            }
          }          
        `;

        const {data: {user}} = await apolloClient.mutate({mutation, variables: {input}})
        return Promise.resolve(user);
    }
}

export default UserService;