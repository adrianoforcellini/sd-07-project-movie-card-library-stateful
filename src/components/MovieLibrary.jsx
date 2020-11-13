// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.movieFilter = this.movieFilter.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
      filteredMovies: this.props.movies,
    };
  }

  onSearchTextChange({ target }) {
    const value = target.value;
    this.setState({ searchText: value }, () => {
      this.movieFilter();
    });
  }
  onBookmarkedChange({ target }) {
    const value = target.checked;
    this.setState({ bookmarkedOnly: value }, () => {
      this.movieFilter();
    });
  }
  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value }, () => {
      this.movieFilter();
    });
  }

  onClick(newMovie) {
    console.log('entrou na funcao onClick');
    console.log(newMovie);
    const newMovieList = [...this.state.movies, newMovie];
    console.log(newMovieList);
    this.setState({
      movies: newMovieList,
    });
  }

  movieFilter() {
    const list = this.props.movies
      .filter((check) => {
        if (this.state.bookmarkedOnly) return check.bookmarked;
        return true;
      })
      .filter((genero) => {
        if (this.state.selectedGenre === '') return true;
        return this.state.selectedGenre === genero.genre;
      })
      .filter((text) => {
        if (this.state.searchText === '') return true;
        const total = `${text.title}*${text.subtitle}*${text.storyline}`;
        return total.includes(this.state.searchText);
      });
    this.setState({ movies: list });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      imagePath: PropTypes.string,
      rating: PropTypes.number,
    }),
  ).isRequired,
};

export default MovieLibrary;
