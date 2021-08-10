import gql from 'graphql-tag';
import {
    userFragment
} from '../../fragments';

export const createUser= gql`
mutation createUser($input: CreateUserInput) {
    user: createUser(input: $input) {
        ...userDetails
    }
  } 
  ${userFragment}         
`;

export const getAllUsers = gql`
query getAllUsers{
    users: getAllUsers {
            ...userDetails
    }
}
${userFragment}
`;