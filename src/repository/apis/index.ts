import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { githubOAuthApiRequester, githubAppApiRequester } from '@/lib/api-requesters';
import { AuthCookie } from '@/repository/cookies';
import { HttpError } from '@/shared/errors';
import { errorMessages } from '@/shared/constants';

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

const unauthorizedErrorHandler = (error: AxiosError) => {
  if (error.response?.status === 401) {
    throw new HttpError({ status: 401, errorMessage: errorMessages.unauthorized });
  }
  throw error;
};

githubOAuthApiRequester.interceptors.request.use(setRequestDefaultHeader);

githubAppApiRequester.interceptors.request.use(setRequestGitHubAppHeader);

githubAppApiRequester.interceptors.response.use(
  (response: AxiosResponse) => response,
  unauthorizedErrorHandler
);

export { authApi, userApi };
