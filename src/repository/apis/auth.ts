import { githubOAuthApiRequester } from '@/lib/api-requesters';
import { GitHubLoginRequest, GitHubLoginResponse } from 'github';

export const postGitHubLogin = async (githubLoginRequest: GitHubLoginRequest) => {
  const response = await githubOAuthApiRequester.post<GitHubLoginResponse>(
    '/access_token',
    githubLoginRequest
  );

  if ('error' in response.data) {
    throw new Error(response.data.error);
  }

  return response.data;
};
