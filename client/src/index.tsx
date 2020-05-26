import * as React from "react";
import * as ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from '@apollo/react-hooks';

import { App } from "./components/App";

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
});

const GraphQLProvider = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

ReactDOM.render(<GraphQLProvider />, document.getElementById("root"));