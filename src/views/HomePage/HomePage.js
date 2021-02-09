import React, { Component } from 'react';
import API from '../../apiService/apiService';
import MovieList from '../../components/MoviesList';
import s from './HomePage.module.css';

class HomePage extends Component {
  state = {
    movies: [],
    error: false,
  };

  async componentDidMount() {
    try {
      const response = await API.getPopularMovies();
      this.setState({ movies: [...response.results] });
    } catch {
      this.setState({ error: true });
    }

    // console.log(response.results);
  }

  render() {
    // console.log(this.props.match.url);
    return (
      <section className={s.section}>
        {this.state.error ? (
          <h1>Сервер не отвечает</h1>
        ) : (
          <>
            <h1 className={s.title}>Trending today</h1>
            <MovieList movies={this.state.movies} />
          </>
        )}
      </section>
    );
  }
}

export default HomePage;
