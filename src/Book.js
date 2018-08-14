import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class Book extends Component {
  state = {  
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {this.setState({books})})
  }

  render() { 
      let filteredBooks = this.state.books.filter(value => value.shelf === this.state.books[3].shelf);  
    return (
      <React.Fragment>
        {this.state.length !== 0 ? filteredBooks.map((currentItem, index, array) => (
        <li key={`KRYNUM_${currentItem.id}`}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.state.books.length !== 0 ? array[index].imageLinks.thumbnail : ''})` }}></div>
              <div className="book-shelf-changer">
                <select onClick={(evt) => console.log(evt.target.value)}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
          <div className="book-title">{array.length !== 0 ? array[index].title : ''}</div>
          <div className="book-authors">{array.length !== 0 ? array[index].authors : ''}</div>
          </div>
        </li>
        ))
      : ''  }  
      </React.Fragment>
    )
  }
}    
    
  // Bed time got to make a state or props ? :) get everything from app or leave it in book

 
export default Book;