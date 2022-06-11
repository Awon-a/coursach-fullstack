import axios from 'axios';

export const BASE_URL = 'https://coursach-fullstack.herokuapp.com';

const $api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

$api.interceptors.request.use((config) => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
  return config;
});

export default $api;