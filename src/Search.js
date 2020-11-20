import React from "react";

function Search (props) {
    return (
      <div className="search-form">
        <div className="searchInput">
          <form onSubmit={props.handleSubmit}>
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


export default Search;
