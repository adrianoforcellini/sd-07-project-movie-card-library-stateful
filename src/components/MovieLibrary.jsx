import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  /* constructor(props) {
    super(props);
  } */

  render() {
    const prop = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={prop.movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
