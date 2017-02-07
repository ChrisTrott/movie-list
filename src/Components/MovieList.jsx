import React from 'react';

import MovieStorage from '../Utils/MovieStorage';
import MovieSort from '../Utils/MovieSort';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.removeFavourite = this.removeFavourite.bind(this);
    this.sortFavourites = this.sortFavourites.bind(this);
    this.clearFavourites = this.clearFavourites.bind(this);
    this.state = {
      movies: [],
    };
  }

  componentWillMount() {
    const storage = new MovieStorage();
    const movies = storage.getMovies();
    this.setState({
      movies,
    });
  }

  removeFavourite(event) {
    const currentIndex = event.target.parentNode.id;
    const storage = new MovieStorage();
    const movies = storage.removeMovie(currentIndex);
    this.setState({
      movies,
    });
  }

  sortFavourites(event) {
    const sortSelect = event.target;
    const sortType = sortSelect.options[sortSelect.selectedIndex].text;
    const sorter = new MovieSort();
    let sortedMovies = [];

    switch (sortType) {
      case 'Title':
        sortedMovies = sorter.sortByTitle(this.state.movies);
        break;
      case 'Rating':
        sortedMovies = sorter.sortByRating(this.state.movies);
        break;
      case 'Year':
        sortedMovies = sorter.sortByYear(this.state.movies);
        break;
      default:
        break;
    }
    this.setState({
      movies: sortedMovies,
    });
  }

  clearFavourites() {
    const storage = new MovieStorage();
    storage.clearMovies();
    this.setState({
      movies: [],
    });
  }

  renderFavourites() {
    return this.state.movies.map((movie, index) => (
      <div className="movie-fav" id={index} key={movie.imdbID}>
        <button onClick={this.removeFavourite}>REMOVE</button>
        <h2>{movie.Title} ({movie.Year})</h2>
        <p>{movie.imdbRating}</p>
      </div>
    ));
  }

  render() {
    return (
      <div id="movie-list">
        <div id="sort-fav" onChange={this.sortFavourites}>
          <label htmlFor="slct-movie-sort">Sort:</label>
          <select id="slct-movie-sort">
            <option>Title</option>
            <option>Rating</option>
            <option>Year</option>
          </select>
        </div>
        <h1>Favourite Movies</h1>
        {this.renderFavourites()}
        <button id="btn-movie-clear" onClick={this.clearFavourites}>CLEAR</button>
      </div>
    );
  }
}

export default MovieList;
