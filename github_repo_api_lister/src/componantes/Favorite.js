import React, { Component } from 'react';
import Table from './Table'
import '../css/Favorite.css';

class Favorite extends Component {
  render() {
    return (
        <div className="container">
            <Table></Table>
        </div>
    );
  }
}

export default Favorite;
