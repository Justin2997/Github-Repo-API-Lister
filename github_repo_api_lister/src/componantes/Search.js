import React, { Component } from 'react';
import axios from "axios";
import Table from './Table';
import '../css/Search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      repo: {},
      tags: {},
      searchRepo: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    var base_url = "https://api.github.com/search/repositories";
    var url = base_url + "?q=" + this.state.searchRepo + "&sort=stars";
    axios.get(url)
      .then((response) => {
        response = response.data
        var repos = {};
        response.items.slice(0, 10).forEach(function(repo) {
          axios.get(repo.tags_url)
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
          });
        });
        console.log(repos);
        this.setState({ repo: repos });
      });
  }

  updateInputValue(evt) {
    this.setState({
      searchRepo: evt.target.value
    });
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
              <button type="submit" form="form1" value="Search">Search</button>
          </form>
        </div>
        <div className="container">
          <Table repo={this.state.repo} tags={this.state.tags}></Table>
        </div>
      </div>
    );
  }
}

export default Search;
