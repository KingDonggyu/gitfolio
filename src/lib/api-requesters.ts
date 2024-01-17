import axios, { AxiosInstance } from 'axios';

export const githubOAuthApiRequester: AxiosInstance = axios.create({
  baseURL: 'https://github.com/login/oauth/',
});

export const githubAppApiRequester: AxiosInstance = axios.create({
  baseURL: 'https://api.github.com/',
});
