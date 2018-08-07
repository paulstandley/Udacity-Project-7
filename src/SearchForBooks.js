import React from 'react';
import { Link } from "react-router-dom";
import './App.css';
import * as BooksAPI from './BooksAPI';

class SearchForBooks extends React.Component {
  state = {
    books: [],
    query: '',
    displayBooks: [],
    num: 1,
    shelf: ''
  }
  /* need citatoiin */
  componentDidMount() {
    BooksAPI.getAll().then((books) => {this.setState({books})})
  }
  
  /* need citation */
  updateDisplay = (query) => {
    let displayBooks = [];
    this.setState({query});
    if(query) {
      BooksAPI.search(query).then(data => {
        if(data.length) {
          displayBooks = data.map(() => {
            let num = this.state.books.findIndex(compVal => compVal.id === data.id);
            if(num >= 0) {
              return this.state.books[num];
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
  
  
  render() { 
    let { query } = this.state;
    return ( 
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='./'>Close</Link>
          <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
          <input type="text" placeholder="Search by title or author" value={query} onChange={(evt) => this.updateDisplay(evt.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.displayBooks.map((book) => (
              <li key={`KEYNUM_${Math.floor(Math.random() * 100000)}`}>
                <div className="book">
                   <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: book[0].imageLinks ? `url(${book.map((currentValue, index, array) => array[index].imageLinks.thumbnail)})` : '' }}></div>
                      <div className="book-shelf-changer">
                        <select value={this.state.shelf} onChange={thing => thing}>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book[0].title}</div>
                    <div className="book-authors">{book[0].authors ? book[0].authors.toString() : ''}</div>
                  </div>
                </li>
              ))}
          </ol>
        </div>
      </div>
     )
  }
}
 
export default SearchForBooks;