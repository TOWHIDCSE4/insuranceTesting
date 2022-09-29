import Axios from 'axios';
import configs from '../config';

const baseApiConfig = {
  baseURL: configs.API_DOMAIN,
  headers: {
    'content-type': 'application/json',
  },
  timeout: 3 * 60 * 1000,
};

const baseApiClient = Axios.create(baseApiConfig);

baseApiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const setupInterceptor = (_store) => {
  baseApiClient.interceptors.request.use(
    (config) => {
      const { accessToken } = _store.getState().auth;
      if (config.headers && accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
};

export const sendGet = (url, params) =>
  baseApiClient.get(url, { params }).then((res) => res);

export const sendPost = (url, params) =>
  baseApiClient.post(url, params).then((res) => res);

export const sendPut = (url, params) =>
  baseApiClient.put(url, params).then((res) => res);

export const sendPatch = (url, params) =>
  baseApiClient.patch(url, params).then((res) => res);

export const sendDelete = (url, params) =>
  baseApiClient.delete(url, { data: params }).then((res) => res);
