import * as React from "react";
import { User } from "./User";

export class App extends React.Component<{}, null> {
    render() {
        return (
            <div>
                <p>Hello World</p>
                <User />
            </div>
        )
    }
}