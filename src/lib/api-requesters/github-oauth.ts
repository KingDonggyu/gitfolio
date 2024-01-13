import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

export const githubOAuthApiRequester: AxiosInstance = axios.create({
  baseURL: 'https://github.com/login/oauth/',
});

githubOAuthApiRequester.interceptors.request.use(
  (requestConfig: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    requestConfig.headers.Accept = 'application/json';
    requestConfig.headers['Content-Type'] = 'application/json;charset=utf-8';
    return requestConfig;
  }
);
