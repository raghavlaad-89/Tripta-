import React, { Component } from 'react';
//import axios from 'axios';
import {books} from './data';
import Header from './Header';
import BookList from './BookList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      keyword: ''
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleMobileSearch = this.handleMobileSearch.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  handleSearchChange(e){
    this.setState({
      keyword: e.target.value.toLowerCase()

    });
  }
  handleSearchSubmit(e){
    e.preventDefault();
  }
  handleMobileSearch(){
    this.setState({
      isMobile: true
    })
  }
  handleBackClick(){
    this.setState({
      isMobile: false,
      keyword: '',
    })
  }
  render() {
    let {keyword, 
      isMobile} = this.state;
    const filteredBooks = books.filter((book)=>{
      let bookTitle = book.title.toString().toLowerCase();
      return bookTitle.indexOf(keyword) > -1;
    });
    return (
    	<div>
    		<Header 
          handleSearchChange={this.handleSearchChange}
          keyword={keyword}
          isMobile={isMobile}
          handleMobileSearch={this.handleMobileSearch}
          handleBackClick = {this.handleBackClick}
          handleSearchSubmit={this.handleSearchSubmit}
        />
	    	<div className="container">
		    	<BookList books={filteredBooks}/>
	     	</div>
	    </div>
    );
  }
}

export default App;
