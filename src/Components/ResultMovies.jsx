import React from 'react';
import { Link } from 'react-router';

class ResultMovies extends React.Component {
  constructor(props) {
    super(props);
    this.renderMovies = this.renderMovies.bind(this);
  }

  renderMovies(movies) {
    return movies.map(movie => (
      <div className="movie-result" key={movie.imdbID}>
        <Link to={`/add/${movie.imdbID}`}><button>ADD</button></Link>
        <p>{movie.Title}</p>
      </div>
    ));
  }

  render() {
    return (
      <div className="movie-results">
        {this.renderMovies(this.props.movies)}
      </div>
    );
  }
}

export default ResultMovies;
