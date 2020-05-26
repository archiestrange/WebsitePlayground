import * as React from "react";
import * as ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { App } from "./components/App";

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
});

import { ApolloProvider } from '@apollo/react-hooks';

const GraphQLProvider = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

ReactDOM.render(<GraphQLProvider />, document.getElementById("root"));