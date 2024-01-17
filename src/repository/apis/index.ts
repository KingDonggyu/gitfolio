import { InternalAxiosRequestConfig } from 'axios';
import { githubOAuthApiRequester, githubAppApiRequester } from '@/lib/api-requesters';
import { AuthCookie } from '@/repository/cookies';

import * as authApi from './auth';
import * as userApi from './user';

const setRequestDefaultHeader = (requestConfig: InternalAxiosRequestConfig) => {
  requestConfig.headers.Accept = 'application/json';
  requestConfig.headers['Content-Type'] = 'application/json;charset=utf-8';
  return requestConfig;
};

const setRequestGitHubAppHeader = (requestConfig: InternalAxiosRequestConfig) => {
  const token = new AuthCookie().get();
  requestConfig.headers.Authorization = `Bearer ${token}`;
  return setRequestDefaultHeader(requestConfig);
};

githubOAuthApiRequester.interceptors.request.use(setRequestDefaultHeader);

githubAppApiRequester.interceptors.request.use(setRequestGitHubAppHeader);

export { authApi, userApi };
