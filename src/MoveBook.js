import React from 'react';
import './ListOfBooks';
import './Book';


class MoveBook extends React.Component {
  state = {  }
  render() { 
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
                <li>
                  <Book/>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      </div>
     );
  }
}
 
export default MoveBook;

  