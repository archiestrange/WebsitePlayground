import * as React from "react";
import { User } from "./User";
import { AddUserForm } from "./AddUserForm";
import { Users } from "./Users";

export function App(): JSX.Element {
    return (
        <div>
            <p>Hello World</p>
            <User />
            <Users />
            <AddUserForm />
        </div>
    );
}