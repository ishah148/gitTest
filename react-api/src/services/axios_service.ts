import axios, { AxiosError } from 'axios';
export const API_URL = 'https://rickandmortyapi.com/api';

export const apiSwapiInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
apiSwapiInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error: AxiosError) => {
    return error;
  }
);
