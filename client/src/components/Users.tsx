import * as React from "react";
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from "../queries/getUsers";

export function Users(): JSX.Element {
    const { loading, error, data } = useQuery(GET_USERS);
    if (loading) return <p>Loading ...</p>;
    return data.getUsers.map(({ id, firstName, lastName, age }: any) => <p key={id}>{firstName}, {lastName}, {age}</p>);
}