import React, { Component } from 'react';
import Search from './Search';
import Favorite from './Favorite';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Github Favorites</h1>
        </header>
        <div className="md-6">
          <Search></Search>
        </div>
        <div className="md-6">
          <Favorite></Favorite>
        </div>
      </div>
    );
  }
}

export default App;
