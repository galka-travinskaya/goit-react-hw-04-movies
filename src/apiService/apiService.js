import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b42193edf8feeaf5794c7807e1c06df9';

const getPopularMovies = () => {
  return axios
    .get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
    .then(response => response.data);
};

const getSearchMovies = query => {
  return axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
    )
    .then(response => response.data);
};

const getDetailsMovie = id => {
  return axios
    .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
};

const getCredits = id => {
  return axios
    .get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
};

const getReviews = id => {
  return axios
    .get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    )
    .then(response => response.data);
};

const API = {
  getPopularMovies,
  getSearchMovies,
  getDetailsMovie,
  getCredits,
  getReviews,
};

export default API;
