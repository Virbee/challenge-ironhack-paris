import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Searchbar from "./SearchBar";

class Celebrities extends Component {
  constructor() {
    super();
    this.state = {
      celebrities: [],
      searchBarValue: "",
      originalCelebrities: []
    };
  }

  componentDidMount() {
    Axios.get(
      "https://api.themoviedb.org/3/person/popular?page=2&api_key=5a43b6ed31f7ecbacac72de69f0abb39"
    ).then(celebrities => {
      console.log(celebrities);
      let popularCelebrities = celebrities.data.results.slice(0, 20);
      this.setState({
        celebrities: popularCelebrities,
        originalCelebrities: popularCelebrities
      });
    });
  }

  filteredCelebrities = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value.toLowerCase() }, () => {
      const copiedCelebrities = [...this.state.originalCelebrities];
      var newRes = copiedCelebrities.filter(celebrity =>
        celebrity.name.toLowerCase().includes(this.state.searchBarValue)
      );
      this.setState({ celebrities: newRes });
    });
  };

  render() {
    return (
      <div className="main-container">
        <div className="all-celebrities-container">
          <Searchbar
            filteringCelebrities={this.filteredCelebrities}
            value={this.state.searchBarValue}
          />
          {this.state.celebrities.map(celebrity => {
            return (
              <Link key={celebrity._id} to={`/celebrities/${celebrity._id}`}>
                <div className="celebrity-container">
                  <img
                    alt={celebrity.name}
                    src={`https://image.tmdb.org/t/p/w185${
                      celebrity.profile_path
                    }`}
                  />
                  <h3>{celebrity.name}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Celebrities;
