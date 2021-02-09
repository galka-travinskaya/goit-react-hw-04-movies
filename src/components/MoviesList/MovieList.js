import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieList.module.css';

const MovieList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li className={s.item} key={movie.id}>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: {
                from: location,
              },
            }}
          >
            {movie.title ? movie.title : movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default withRouter(MovieList);
