import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Book from "./Book";
 
class ListOfBooks extends React.Component {
  
  render() { 
    console.log(this.props.data.booksAPP.filter(value => value.shelf === 'currentlyReading'));
    return ( 
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf" id="currentlyReading">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                    
                    <Book data={this.props}/>
                  
                </ol>
              </div>
            </div>
          <div className="bookshelf" id="wantToRead">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                
                  <Book data={this.props}/>
              
              </ol>
            </div>
          </div>
          <div className="bookshelf" id="read">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">                
              <ol className="books-grid">
                
                  <Book data={this.props}/>
                
              </ol>
            </div>
          </div>
        </div>
      </div>
        <div className="open-search">
          <Link to='./search'>Add a book</Link>
        </div>  
      </div>
      );
    }
}
 
export default ListOfBooks;

