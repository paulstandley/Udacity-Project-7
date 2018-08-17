import React from 'react';
import './App.css'
import * as BooksAPI from './BooksAPI';
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ListOfBooks from './ListOfBooks';
// get all data set it as state then pass it down as props 
class BooksApp extends React.Component {
  state = {
    booksAPP: [],
    query: '',
    displayBooks: [],
    num: 1,
    BOOKS: [],
    shelf: ["wantToRead", "currentlyReading", "read"], 
  }
// call BooksAPI in componentDidMount
  componentDidMount() {
    BooksAPI.getAll().then((booksAPP) => {this.setState({booksAPP})})
  }
// event hadeling, update get all then setstate
  moveBookHandler = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((booksAPP) => {this.setState({booksAPP})});
  }
// update search fill display array then set the state  
  updateDisplay = (query) => {
    let displayBooks = [];
    this.setState({query});
    if(query) {
      BooksAPI.search(query).then(data => {
        if(data.length) {
          displayBooks = data.map(() => {
            let num = this.state.booksAPP.findIndex(compVal => compVal.id === data.id);
            if(num >= 0) {
              return this.state.booksAPP[num];
            }else{
              return data;
            }
          })
        }
        this.setState({displayBooks});
      })
    }
    else{
      this.setState({displayBooks});
    }
  }

//new components ListOfBooks :) and display search  
  render() {
    const  { query } = this.state;
    return (
      <div className="app">
        <Route exact path='/search' render={() =>  (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='./'>Close</Link>
                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" value={query} onChange={(evt) => this.updateDisplay(evt.target.value)}/>
                </div>
              </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.query.displayBooks.map((book, index, array) => (
                  <li key={`${book[index].id}`}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: book[index].imageLinks ? `url(${book[index].imageLinks.thumbnail})` : '' }}></div>
                          <div className="book-shelf-changer">
                            <select onChange={(evt) => this.moveBookHandler(book[index], evt.target.value)}>
                              <option value="move" disabled={true}>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                      <div className="book-title">{book[index].title ? book[index].title : ''}</div>
                      <div className="book-authors">{book[index].authors ? book[index].authors.toString() : ''}</div>
                    </div>
                  </li>
                )) }
              </ol>
            </div>
          </div>
        )} />
        <Route exact path='/' render={() => ( 
          <ListOfBooks moveBookHandler={this.moveBookHandler} data={this.state}/> 
        )} />
      </div>
    )
  }
}

export default BooksApp