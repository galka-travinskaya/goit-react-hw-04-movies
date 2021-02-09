import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './SearchForm.module.css';

class SearchForm extends Component {
  state = {
    query: '',
  };

  handleNameChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      alert('Пустое поле');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search movies"
          value={this.state.query}
          onChange={this.handleNameChange}
        />
        <button className={s.button} type="submit">
          <span>Search</span>
        </button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
