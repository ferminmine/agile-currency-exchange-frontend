import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const axiosGenerator = () =>
  axios.create({
    timeout: 1500,
    headers: {
      Authorization:
        localStorage.getItem('userAccessToken') &&
        `Bearer ${localStorage.getItem('userAccessToken')}`,
      accept: 'application/json'
    }
  });

let apiClient = axiosGenerator();

export const fetchUserInfoService = async userID => {
  const url = `${SERVER_URL}/api/users/${userID}/`;
  const response = await apiClient.get(url);
  return response.data;
};

export const fetchAvailableCurrenciesService = async () => {
  const url = `${SERVER_URL}/api/currencies/`;
  const response = await apiClient.get(url);
  return response.data;
};

export const registerUserService = async user => {
  try {
    const url = `${SERVER_URL}/api/users/`;
    const response = await apiClient.post(url, user);
    return response;
  } catch (error) {
    return { errors: error.response.data };
  }
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
