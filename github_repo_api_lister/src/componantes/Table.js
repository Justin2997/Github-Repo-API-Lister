import React, { Component } from 'react';
import '../css/Table.css';

class Table extends Component {
  constructor(props) {
    super(props);

    this.favoriteAction = this.favoriteAction.bind(this);
  }


  favoriteAction(event){
    var repos = this.props.repo;
    console.log(event.target);
    var repo = repos[event.target.id];
    console.log(repo);
    this.props.favoritesAction(repo);
  }

  render() {
    var reposList = [];
    var repos = this.props.repo;
    if (repos) {
      var length = repos.length;
      for (var i = 0; i < length; i++) {
          reposList.push(
            <tr key={i}>
              <td data-label="Name">{repos[i].full_name}</td>
              <td data-label="Language">{repos[i].language}</td>
              <td data-label="Latest tag">{repos[i].tag || "-"}</td>
              <td data-label="Period"><span className="actionLink" id={i} onClick={ this.favoriteAction }>{this.props.action}</span></td>
            </tr>
        );
      }
    }
    
    return (
      <div className="container" id="TableZone">
        <table>
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Language</th>
                <th scope="col">Latest tag</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {reposList}
              <tr>
              <td data-label="Name">repos[i].full_name</td>
                <td data-label="Language">repos[i].language</td>
                <td data-label="Latest tag">repos[i].tag</td>
                <td data-label="Period"><span className="actionLink" id="0" onClick={ this.favoriteAction }>{this.props.action}</span></td>
              </tr>
            </tbody>
            </table>
      </div>
    );
  }
}

export default Table;
