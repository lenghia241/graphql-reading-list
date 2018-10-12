import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

class BookList extends Component {
  state = {
    selected: null
  };
  render() {
    const { books, loading } = this.props.data;
    let booksRender = "";
    if (loading) {
      booksRender = <div>Loading Books...</div>;
    } else {
      booksRender = books.map(book => (
        <li key={book.id} onClick={() => this.setState({ selected: book.id })}>
          {book.name}
        </li>
      ));
    }
    return (
      <form className="col s6">
        <ul id="book-list">{booksRender}</ul>
        <BookDetails bookId={this.state.selected} />
      </form>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
