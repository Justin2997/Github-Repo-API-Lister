import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Table from './Table'
import '../css/Favorite.css';

class Favorite extends Component {
    constructor(props) {
        super(props);
    }

    removeFavorite(favorite){
        const cookies = new Cookies();
        var favorites = cookies.get('favorites');
        var index = favorites.indexOf(favorite);
        if (index > -1) {
            favorites.splice(index, 1);
        }
        cookies.set('favorites', favorites, { path: '/' });
    }

  render() {
    const cookies = new Cookies();
    var favorites =  cookies.get('favorites');
    return (
        <div className="container">
            <Table favorites={favorites} favoritesAction={this.removeFavorite} action="Remove"></Table>
        </div>
    );
  }
}

export default Favorite;
