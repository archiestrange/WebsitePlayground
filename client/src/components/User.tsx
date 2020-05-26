import * as React from "react";
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_BY_ID } from "../queries/getUsernames";

export function User() {
    const { loading, error, data } = useQuery(GET_USER_BY_ID, {
        variables: { id: 1 },
    });
    if (loading) return <p>Loading ...</p>;
    console.log(data);
    return <h1>Hello {data.getUser.firstName}!</h1>;
}