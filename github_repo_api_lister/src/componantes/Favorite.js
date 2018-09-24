import React, { Component } from 'react';
import Table from './Table'
import '../css/Favorite.css';

class Favorite extends Component {
    constructor(props) {
        super(props);
    }

    removeFavorite(favorite){
        this.props.favorite.remove(favorite);
    }

  render() {
    return (
        <div className="container">
            <Table favorites={this.props.favorites} favoritesAction={this.removeFavorite} action="Add"></Table>
        </div>
    );
  }
}

export default Favorite;
