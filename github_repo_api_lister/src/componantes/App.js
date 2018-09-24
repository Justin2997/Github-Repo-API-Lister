import React, { Component } from 'react';
import Search from './Search';
import Favorite from './Favorite';
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: {}
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Github Favorites</h1>
        </header>
        <div className="md-6">
          <Search favorites={this.state.favorites}></Search>
        </div>
        <div className="md-6">
          <Favorite favorites={this.state.favorites}></Favorite>
        </div>
      </div>
    );
  }
}

export default App;
