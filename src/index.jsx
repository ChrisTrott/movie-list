import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Search from './Components/Search';
import MovieList from './Components/MovieList';
import Results from './Components/Results';
import AddMovie from './Components/AddMovie';

const App = props => (
  <div className="app">
    <Search />
    {props.children}
    <MovieList />
  </div>
);

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="search/:searchText" component={Results} />
      <Route path="add/:movieId" component={AddMovie} />
    </Route>
  </Router>
), document.querySelector('#app'));
