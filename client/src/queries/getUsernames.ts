import gql from 'graphql-tag';

export const GET_USER_BY_ID = gql`
    query getUser($id: Int!) {
        getUser(id: $id) {
            id,
            firstName,
            lastName,
            age
        }
    }
`;