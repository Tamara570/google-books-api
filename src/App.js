import React, { Component } from 'react'
import Header from './Header'
import Results from './Results'
import Search from './Search'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      query: "",
      filterType: "",
      printType: "",
      books: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { query, filterType, printType } = this.state;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyAJ0_n3n5go4US0-QOwOQRPIiBjSjle3LY&filter=${filterType}&printType=${printType}`;
    const options = {
      method: 'GET',
      headers: {
        "Authorization": "Bearer $AIzaSyAJ0_n3n5go4US0-QOwOQRPIiBjSjle3LY",
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.')
        }
        return res
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data,
          error: null
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Search books={this.state.books} handleSubmit={this.handleSubmit(e)} />
        <Results books={this.state.books}/>
      </div>
    )
  }
}

export default App;