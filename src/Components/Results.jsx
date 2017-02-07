import React from 'react';
import { connect } from 'react-refetch';

import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import ResultMovies from './ResultMovies';

class Results extends React.Component {
  render() {
    const { resultsFetch } = this.props;
    if (resultsFetch.pending) {
      return <Loading />;
    } else if (resultsFetch.rejected) {
      return <ErrorMessage error={resultsFetch.reason.message} />;
    } else if (resultsFetch.fulfilled) {
      if (resultsFetch.value.Response === "False") {
        return <ErrorMessage error={resultsFetch.value.Error} />;
      }
      return <ResultMovies movies={resultsFetch.value.Search} />;
    }
  }
}

export default connect(props => ({
  resultsFetch: {
    url: `http://omdbapi.com/?s=${props.params.searchText}&type=movie`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
  },
}))(Results);
