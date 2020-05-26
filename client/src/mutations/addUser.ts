import gql from 'graphql-tag';

export const ADD_USER = gql`
    mutation AddUser($firstName: String!, $lastName: String!, $age: Int!) {
        addUser(firstName: $firstName, lastName: $lastName, age: $age) {
            id
            firstName
            lastName
            age
        }
    }
`;