import type {
  GitHubLoginErrorResponse,
  GitHubLoginRequest,
  GitHubLoginResponse,
  GitHubLoginSuccessResponse,
} from 'github';
import { githubOAuthApiRequester } from '@/lib/api-requesters';

export const postGitHubLogin = async (
  githubLoginRequest: GitHubLoginRequest
): Promise<GitHubLoginSuccessResponse> => {
  const response = await githubOAuthApiRequester.post<GitHubLoginResponse>(
    'access_token',
    githubLoginRequest
  );

  if (isGitHubLoginError(response.data)) {
    throw new Error(response.data.error);
  }

  return response.data;
};

const isGitHubLoginError = (
  response: GitHubLoginResponse
): response is GitHubLoginErrorResponse => {
  return 'error' in response;
};
