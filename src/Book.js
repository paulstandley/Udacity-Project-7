import React, { Component } from 'react';
import './App';

class Book extends Component {
  
  render() { 
// fragmet displays books with props filtered in list of books.
    return (
      <React.Fragment>
        {this.props.length !== 0 ? this.props.shelf.map((currentItem, index, array) => (
        <li key={`${index}`}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.length !== 0 ? array[index].imageLinks.thumbnail : ''})` }}></div>
              <div className="book-shelf-changer">
                <select onChange={(evt) => this.props.moveBookHandler(currentItem, evt.target.value)}>
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
     
export default Book;