import React, { Component } from 'react'

class Book extends Component {
  state = {  }
  
  render() { 
    const { thing } = this.props;
    return (
      <ol>
        {thing === undefined ? thing.map( (currentItem, index, array) => (
        <li key={`KRYNUM_${currentItem.id}`}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${array.lenght ? array[index].imageLinks.thumbnail : 'http://res.cloudinary.com/pieol2/image/upload/v1527370300/lou.jpg'})` }}></div>
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
          <div className="book-title">{this.props.imgUrl.books.lenght ? this.props.imgUrl.books[0].tille : 'It\'s My Book OK!'}</div>
          <div className="book-authors">{this.props.imgUrl.books.lenght ? this.props.imgUrl.books[0].authors : 'Louise why I Killed Paul Standley'}</div>
          </div>
        </li>
        ))
      : 'Errrrrrrrr'  }  
      </ol>
  
    // fix it later bedtime :) 
      }}]]}}}}}}}}}}}}}]]]
    
  

 
export default Book;