import React from 'react';
import { Link } from "react-router-dom";
import './App.css';


class SearchForBooks extends React.Component {
  
  /*  */  
  
  render() { 
    let { query } = this.props;
    console.log(query)
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
          <input  type="text" placeholder="Search by title or author" value={query} onChange={(evt) => this.props.updateDisplay(evt.target.value.trim())}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props ? '' : this.props.displayBooks.map((book, index, array) => (
              <li key={`${book[index].id}`}>
                <div className="book">
                   <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: book[index].imageLinks ? `url(${book[index].imageLinks.thumbnail})` : '' }}></div>
                      <div className="book-shelf-changer">
                        <select value={index} onChange={(evt) => this.props.moveBookHandler(book[index], evt.target.value)}>
                          <option value="move" disabled={true}>Move to...</option>
                          <option id="option_1" value="currentlyReading">Currently Reading</option>
                          <option id="option_2" value="wantToRead">Want to Read</option>
                          <option id="option_3" value="read">Read</option>
                          <option id="option_4" value="none">None</option>
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
     )
  }
}
 
export default SearchForBooks;