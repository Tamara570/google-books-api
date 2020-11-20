import React, { Component } from "react";

class Search extends Component {


  handleChange = (event) => {
    console.log(event.target.id, event.target.value);
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.query}&key=AIzaSyAJ0_n3n5go4US0-QOwOQRPIiBjSjle3LY`;
    if (this.state.filterType) {
      url += `&filter=${this.state.filterType}`;
    }
    if (this.state.printType) {
      url += `&printType=${this.state.printType}`;
    }

    const options = {
      method: "GET",
    };

    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          books: data.items || [],
          title: "",
          author: "",
          listPrice: "",
          description: "",
          imageLinks: "",
          error: null,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  };

  render() {
    return (
      <div className="search-form">
        <div className="searchInput">
          <form onSubmit={this.handleSubmit}>
            Search:
            <input
              type="text"
              id="query"
              value={this.state.query}
              onChange={this.handleChange}
            />
            <button>Search</button>
          </form>
        </div>

        <div className="filterSearch">
          <div className="filterPrintType">
            <p>Paid or Free:</p>
            <select
              id="filterType"
              value={this.state.salesType}
              onChange={this.handleChange}
            >
              <option name="ebooks">All</option>
              <option value="free-ebooks"> Free-e-book</option>
              <option value="paid-ebooks">Paid-e-Book</option>
            </select>
          </div>
          <div className="filterBookType">
            <p>Print Type:</p>
            <select
              id="printType"
              value={this.state.printType}
              onChange={this.handleChange}
            >
              <option value="all">All</option>
              <option value="books"> Books</option>
              <option value="magazines"> Magazines</option>
              <option value="ebooks"> E-Books</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
