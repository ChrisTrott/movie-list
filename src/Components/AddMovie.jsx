import React from 'react';
import { connect } from 'react-refetch';
import { browserHistory } from 'react-router';

import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import MovieStorage from '../Utils/MovieStorage';

class AddMovie extends React.Component {
  render() {
    const { movieFetch } = this.props;
    if (movieFetch.pending) {
      return <Loading />;
    } else if (movieFetch.rejected) {
      return <ErrorMessage error={movieFetch.reason.message} />;
    } else if (movieFetch.fulfilled) {
      if (movieFetch.value.Response === "False") {
        return <ErrorMessage error={movieFetch.reason.message} />;
      }
      const storage = new MovieStorage();
      storage.addMovie(movieFetch.value);
      browserHistory.push('/');
    }
  }
}

export default connect(props => ({
  movieFetch: {
    url: `http://omdbapi.com/?i=${props.params.movieId}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
  },
}))(AddMovie);
