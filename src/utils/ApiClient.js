import axios from 'axios';
import { push } from 'connected-react-router';
import store, { resetApp } from '../store/Store';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const axiosGenerator = () => {
  const axiosInstance = axios.create({
    timeout: 1500,
    headers: {
      Authorization:
        localStorage.getItem('userAccessToken') &&
        `Bearer ${localStorage.getItem('userAccessToken')}`,
      accept: 'application/json'
    }
  });
  axiosInstance.interceptors.response.use(null, error => {
    if (error.response.status === 401) {
      localStorage.removeItem('userAccessToken');
      store.dispatch(resetApp());
      store.dispatch(push('/login'));
    }
    return Promise.reject(error);
  });
  return axiosInstance;
};

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
    return Promise.reject(new Error({ errors: error.response.data }));
  }
};

export const fetchAccountInfoService = async userID => {
  try {
    const url = `${SERVER_URL}/api/accounts/${userID}/`;
    const response = await apiClient.get(url);
    return response.data;
  } catch (error) {
    return Promise.reject(new Error({ errors: error.response.data }));
  }
};

export const fetchAccountLogsInfoService = async userID => {
  try {
    const url = `${SERVER_URL}/api/account/${userID}/logs/`;
    const response = await apiClient.get(url);
    return response.data;
  } catch (error) {
    return Promise.reject(new Error({ errors: error.response.data }));
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

export const addMoneyToAccountService = async (accountID, value) => {
  try {
    const url = `${SERVER_URL}/api/accounts/add-money/${accountID}/`;
    const response = await apiClient.post(url, { value_to_add: value });
    return response.data;
  } catch (error) {
    return Promise.reject(new Error({ errors: error.response.data }));
  }
};

export const withdrawMoneyFromAccountService = async (accountID, value) => {
  try {
    const url = `${SERVER_URL}/api/accounts/withdraw-money/${accountID}/`;
    const response = await apiClient.post(url, { value_to_withdraw: value });
    return response.data;
  } catch (error) {
    return Promise.reject(new Error({ errors: error.response.data }));
  }
};

export const transferMoneyToAccountService = async (accountID, value, accountToTransferID) => {
  try {
    const url = `${SERVER_URL}/api/accounts/transfer-money/${accountID}/`;
    const response = await apiClient.post(url, {
      value_to_transfer: value,
      account_to_transfer_id: accountToTransferID
    });
    return response.data;
  } catch (error) {
    return Promise.reject(new Error({ errors: error.response.data }));
  }
};
