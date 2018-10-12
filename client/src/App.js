import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import BookList from "./compoents/BookList";
import AddBook from "./compoents/AddBook";

const client = new ApolloClient({
  uri: "http://localhost:7000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main container">
          <h1>Niko's Reading List</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
