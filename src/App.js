import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ListOfBooks from './ListOfBooks';
import './App.css';
var holder = [];

{/* Udacity i fiexed it i think :) */}


// get all data set it as state then pass it down as props 
class BooksApp extends React.Component {
  state = {
    booksAPP: [],
    query: '',
    displayBooks: [],
    num: 1,
    BOOKS: []
  }
// call BooksAPI in componentDidMount
  componentDidMount() {
    BooksAPI.getAll().then((booksAPP) => {this.setState({booksAPP})})
  }
  
// event hadeling, update book from search then get state 
  moveBookHandler = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
// concatanate the book from search to book state      
      this.setState(newState => ({
        booksAPP: newState.booksAPP.filter(bookVal => bookVal.id !== book.id).concat(book)
      }));
    });
    //BooksAPI.getAll().then((booksAPP) => {this.setState({booksAPP})});
  }

// update search fill display array then set the state  
  updateDisplay = (query) => {
    if(holder.length === 20) {
      holder = [];
    }
    let tempARRAY;
    let newQuery;
    let displayBooks = [];
    this.queryMethod(query);
    if(query !== '') {
      newQuery = query;
      BooksAPI.search(newQuery).then(data => {
        if (data.length) {
          displayBooks = data.map((currentValue, index, array) => {
            
          let shelfValueIndex = this.state.booksAPP.findIndex(val => val.id === currentValue.id)
          let num = this.state.booksAPP.findIndex(compVal => compVal.id === data.id);
// num is allways -1 temp array is a book that is on nain page when underfined 
// bookObject puts shelf on book off none :)

            if(num === -1) {
              tempARRAY = this.state.booksAPP[shelfValueIndex];
 
                if(tempARRAY !== undefined) {
                  currentValue.shelf = tempARRAY.shelf;
                }else{
                
                currentValue.shelf = 'none';
            
                }               
// update query on return off promise                
                this.queryMethod(query); 
// compare values then return new array with shelf values added 
              console.log(data);
              return data;
            }
            
            
          });
        }
        
        query === '' ? this.setState({ displayBooks: [] }) : this.setState({ displayBooks });
      }).catch((error) => {console.error(error);
      });
    }
    else{
      query === '' ? this.setState({ displayBooks: [] }) : this.setState({ displayBooks });
    }
  }

  queryMethod(query) {
    this.setState({ query });
  }

// display searh main and page   
  render() {
    
    return (
      <div className="app">
        <Route exact path='/search' render={() =>  (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='./'>Close</Link>
                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(evt) => this.updateDisplay(evt.target.value)}/>
                </div>
              </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.displayBooks.length !== 0 ? this.state.displayBooks.map((book, index, array) => (
                  
                  <li key={`${book[index].id}`}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: book[index].imageLinks ? `url(${book[index].imageLinks.thumbnail})` : '' }}></div>
                          <div className="book-shelf-changer">

                            <select value={book[index].shelf} onChange={(evt) => this.moveBookHandler(book[index], evt.target.value)}>
                              <option value="move" disabled={true}>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>

                          </div>
                        </div>
                      <div className="book-title">{book[index].title ? book[index].title.toString() : ''}</div>
                      <div className="book-authors">{book[index].authors ? book[index].authors.toString() : ''}</div>
                    </div>
                  </li>

                )) : '' }
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