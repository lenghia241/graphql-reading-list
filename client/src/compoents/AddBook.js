import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery
} from "../queries/queries";

class AddBook extends Component {
  state = {
    name: "",
    genre: "",
    author: ""
  };
  select = React.createRef();

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.author
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
    this.setState({
      name: "",
      genre: "",
      author: ""
    });
  };

  render() {
    const { authors, loading } = this.props.getAuthorsQuery;
    let authorsRender = "";
    if (loading) {
      authorsRender = <option />;
    } else {
      authorsRender = authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
    // if (authors) {
    //   window.M.FormSelect.init(this.select);
    // }
    return (
      <form className="col s6" onSubmit={this.onFormSubmit}>
        <div className="input-field col s6">
          <input
            id="name"
            type="text"
            value={this.state.name}
            className="validate"
            name="name"
            onChange={this.onInputChange}
          />
          <label htmlFor="name">Book Name</label>
        </div>
        <div className="input-field col s6">
          <input
            id="genre"
            type="text"
            value={this.state.genre}
            className="validate"
            name="genre"
            onChange={this.onInputChange}
          />
          <label htmlFor="genre">Genre</label>
        </div>
        <div className="input-field col s12">
          <select
            ref={select => {
              this.select = select;
            }}
            name="author"
            value={this.state.author}
            onChange={this.onInputChange}
          >
            <option value="" disabled defaultValue>
              Select Author
            </option>
            {authorsRender}
          </select>
          <label>Author</label>
        </div>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
