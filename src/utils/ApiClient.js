import axios from 'axios';

// const authorizationToken = () => ''

const API_KEY = process.env.REACT_APP_API_KEY;
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const searchMovieOMDB = async (query, year = '', type = '', page = 1) => {
  let url = `${SERVER_URL}/?s=${query}&type=${type}&y=${year}&page=${page}&apikey=${API_KEY}`;
  return await apiClient.get(url);
};

export const getMovieDetailOMDB = async imdbID => {
  let url = `${SERVER_URL}/?i=${imdbID}&apikey=${API_KEY}`;
  return await apiClient.get(url);
};

const apiClient = axios.create({
  timeout: 1000
  /* headers: {
        Authorization: `Bearer ${authorizationToken()}`,
        accept: 'application/json',
    } */
});
