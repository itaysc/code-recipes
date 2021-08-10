import gql from 'graphql-tag';

export const userFragment =  gql`
    fragment userDetails on User{
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
`;
