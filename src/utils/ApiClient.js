import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const axiosGenerator = () =>
  axios.create({
    timeout: 1500,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userAccessToken')}`,
      accept: 'application/json'
    }
  });

let apiClient = axiosGenerator();

export const fetchUserInfoService = async userID => {
  const url = `${SERVER_URL}/api/users/${userID}/`;
  const response = await apiClient.get(url);
  return response.data;
};

export const attemptUserLogin = async (username, password) => {
  const url = `${SERVER_URL}/api/token/`;
  let token = null;
  try {
    token = await apiClient.post(url, { username, password });
    localStorage.setItem('userAccessToken', token.data.access);
    apiClient = axiosGenerator();
    localStorage.setItem('userRefreshToken', token.data.refresh);
    return token.data.access;
  } catch (error) {
    return token;
  }
};
