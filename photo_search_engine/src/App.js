import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar'
import unsplash from './api/unsplash'
import ImageList from './Components/ImageList';

class App extends Component {

  
  state = {images : []};

   onSearchSubmit=async (term)=>
  {
    const response = await unsplash.get('/search/photos',{
      params: {query : term},
      
    });  
    console.log(response.data.results);
    this.setState({images: response.data.results});    
  }

  render()
  {
    return (
    <div className="ui container" style={{marginTop:'10px'}}>
      <SearchBar onSubmitt={this.onSearchSubmit}/>
      <ImageList images={this.state.images}/>

    </div>
      );
  }
 
}

export default App;
