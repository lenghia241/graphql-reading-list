import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";

class BookList extends Component {
  render() {
    const { books, loading } = this.props.data;
    let booksRender = "";
    if (loading) {
      booksRender = <div>Loading Books...</div>;
    } else {
      booksRender = books.map(book => <li key={book.id}>{book.name}</li>);
    }
    return (
      <form className="col s6">
        <ul id="book-list">{booksRender}</ul>
      </form>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
