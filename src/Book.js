import React, { Component } from 'react';
import './App';

class Book extends Component {
  state = {
    gotProps: true,
  }


  render() { 

 
    console.log(this.props.data.data.booksAPP)
    console.log(this.props.shelf);
    console.log(this.props.moveBookHandler);
     // let filteredBooks = this.props.books.filter(value => value.shelf === this.props.books[3].shelf);  
    return (
      <React.Fragment>
        {this.state.gotProps && this.props.length !== 0 ? this.props.shelf.map((currentItem, index, array) => (
        <li key={`KRYNUM_${currentItem.id}`}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.length !== 0 ? array[index].imageLinks.thumbnail : ''})` }}></div>
              <div className="book-shelf-changer">
                <select onChange={(evt) => this.props.moveBookHandler(this.props.data.data.booksAPP[index], evt.target.value)}>
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
    
  // Bed time got to make a props or props ? :) get everything from app or leave it in book

 
export default Book;