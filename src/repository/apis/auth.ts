import { githubOAuthApiRequester } from '@/lib/api-requesters';
import type { GitHubLoginRequest, GitHubLoginResponse, GitHubLoginSuccessResponse } from 'github';

export const postGitHubLogin = async (
  githubLoginRequest: GitHubLoginRequest
): Promise<GitHubLoginSuccessResponse> => {
  const response = await githubOAuthApiRequester.post<GitHubLoginResponse>(
    'access_token',
    githubLoginRequest
  );

  if ('error' in response.data) {
    throw new Error(response.data.error);
  }

  return response.data;
};
