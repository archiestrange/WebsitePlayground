import * as React from "react";
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_BY_ID } from "../queries/getUser";

export function User(): JSX.Element {
    const { loading, error, data } = useQuery(GET_USER_BY_ID, {
        variables: { id: 1 },
    });
    if (loading) return <p>Loading ...</p>;
    return <h1>Hello {data.getUser.firstName}!</h1>;
}