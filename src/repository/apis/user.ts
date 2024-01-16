import { githubApiRequester } from '@/lib/api-requesters';
import type { GitHubUserResponse } from 'github';
import type { UserResponse } from 'user';

export const fetchUser = async (): Promise<UserResponse> => {
  const response = await githubApiRequester.get<GitHubUserResponse>('user');
  const { id, login, html_url } = response.data;

  return {
    id: id,
    username: login,
    githubUrl: html_url,
  };
};
