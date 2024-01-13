import { githubApiRequester } from '@/lib/api-requesters/github';
import type { GitHubUserResponse } from 'github';
import type { User } from 'user';

export const fetchUser = async (): Promise<User> => {
  const response = await githubApiRequester.get<GitHubUserResponse>('user');
  const { id, login, html_url } = response.data;

  return {
    id: id,
    username: login,
    githubUrl: html_url,
  };
};
