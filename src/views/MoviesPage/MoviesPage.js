import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm';
import MovieList from '../../components/MoviesList';
import API from '../../apiService/apiService';

export default class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
  };

  handleSearchSubmit = query => {
    this.setState({ query });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      const response = await API.getSearchMovies(this.state.query);
      console.log(response.results);
      this.setState({ movies: [...response.results] });
    }
    if (this.state.movies.length === 0) {
      alert('По вашему запросу ничего не найдено');
    }
  }

  render() {
    return (
      <div>
        <SearchForm onSubmit={this.handleSearchSubmit} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}
