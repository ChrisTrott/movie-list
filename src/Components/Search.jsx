import React from 'react';
import { browserHistory } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
  }

  onUpdateSearch(event) {
    const searchText = event.target.value;
    browserHistory.push(`/search/${searchText}`);
  }

  render() {
    return (
      <div id="search-area">
        <input placeholder="Search for a movie..." onChange={this.onUpdateSearch} />
      </div>
    );
  }
}

export default Search;
