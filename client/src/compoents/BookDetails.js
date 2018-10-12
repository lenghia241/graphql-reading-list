import React, { Component, Fragment } from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../queries/queries";

class BookDetails extends Component {
  bookRender = () => {
    const { book } = this.props.data;
    console.log(book);
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All Books by this author:</p>
          <ul>
            {book.author.books.map(item => (
              <span key={item.id}>{item.name}</span>
            ))}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected</div>;
    }
  };
  render() {
    return <Fragment>{this.bookRender()}</Fragment>;
  }
}

export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    };
  }
})(BookDetails);
