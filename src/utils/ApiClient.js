import axios from 'axios';

const authorizationToken = () => localStorage.getItem('userAccessToken');

const API_KEY = process.env.REACT_APP_API_KEY;
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const apiClient = axios.create({
  timeout: 1500,
  headers: {
    Authorization: `Bearer ${authorizationToken()}`,
    accept: 'application/json'
  }
});

export const searchMovieOMDB = async (query, year = '', type = '', page = 1) => {
  let url = `${SERVER_URL}/?s=${query}&type=${type}&y=${year}&page=${page}&apikey=${API_KEY}`;
  return await apiClient.get(url);
};

export const attemptUserLogin = async (username, password) => {
  const url = `${SERVER_URL}/api/token/`;
  let token = null;
  try {
    token = await apiClient.post(url, { username, password });
    localStorage.setItem('userAccessToken', token.data.access);
    localStorage.setItem('userRefreshToken', token.data.refresh);
    return token.data.access;
  } catch (error) {
    return token;
  }
};
