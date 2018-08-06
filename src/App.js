import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom";
import ListOfBooks from './ListOfBooks';
import SearchForBooks from './SearchForBooks';
 
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }
/* Two new components SearchForBooks and ListOfBooks for the instate TODO. it is done :)  */
  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() =>  (
          <SearchForBooks/>
        )} />
        <Route exact path='/' render={() => ( 
          <ListOfBooks/> 
        )} />
      </div>
    )
  }
}

export default BooksApp
