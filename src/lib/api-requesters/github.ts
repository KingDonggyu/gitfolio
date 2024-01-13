import { AuthCookie } from '@/repository/cookies/auth';
import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

export const githubApiRequester: AxiosInstance = axios.create({
  baseURL: 'https://api.github.com/',
});

githubApiRequester.interceptors.request.use(
  (requestConfig: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = new AuthCookie().get();

    requestConfig.headers.Accept = 'application/json';
    requestConfig.headers['Content-Type'] = 'application/json;charset=utf-8';
    requestConfig.headers.Authorization = `Bearer ${token}`;

    return requestConfig;
  }
);
