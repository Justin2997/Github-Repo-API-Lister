import React, { Component } from 'react';
import axios from "axios";
import Cookies from 'universal-cookie';
import Table from './Table';
import '../css/Search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.addFavorite = this.addFavorite.bind(this);

    this.state = {
      repo: {},
      searchRepo: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    var base_url = "https://api.github.com/search/repositories";
    var url = base_url + "?q=" + this.state.searchRepo + "&sort=stars";
    url = url + "&username=justin2997";
    var self = this;
    axios.get(url)
      .then((response) => {
        response = response.data
        var repos = [];
        response.items.slice(0, 10).forEach(function(repo) {
          /*axios.get(repo.tags_url)
          .then((tagJson) => {
            tagJson = tagJson.data;
            var tag;

            if (tagJson.length > 0){
              tag = tagJson[0].name;
            }else{
              tag = "";
            }

            var newRepo = {
              full_name: repo.full_name,
              language: repo.language,
              tag: tag
            };
            repos = {...repos, ...newRepo};
            self.setState({ repo: repos });
          });*/

          var newRepo = {
            full_name: repo.full_name.substring(0,8),
            language: repo.language,
            tag: repo.tags_url.substring(0,8)
          };
          repos.push(newRepo);
          self.setState({ repo: repos });
        });
      });
  }

  updateInputValue(evt) {
    this.setState({
      searchRepo: evt.target.value
    });
  }

  addFavorite(favorite){
      const cookies = new Cookies();
      var favorites = cookies.get('favorites');
      if (favorite === undefined){
        favorites = [];
      }
      favorites.push(favorite);
      console.log(favorites);
      cookies.set('favorites', favorites, { path: '/' });
  }
   
  render() {
    return (
      <div className="container">
        <div className="container" id="searchZone">
          <form id="searchingForm" onSubmit={this.handleSubmit}>
              <input 
                type="text" 
                name="search" 
                value={this.state.searchRepo} 
                onChange={evt => this.updateInputValue(evt)}
                placeholder="Search.."
              />
              <button type="submit" onClick={this.handleSubmit} value="Search">Search</button>
          </form>
        </div>
        <div className="container">
          <Table repo={this.state.repo} favorites={this.props.favorites} favoritesAction={this.addFavorite} action="Add"></Table>
        </div>
      </div>
    );
  }
}

export default Search;
