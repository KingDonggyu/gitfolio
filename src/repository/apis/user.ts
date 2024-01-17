import type { GitHubUserResponse } from 'github';
import { githubAppApiRequester } from '@/lib/api-requesters';
import axios from 'axios';

export const fetchGitHubUser = async (): Promise<GitHubUserResponse> => {
  const response = await githubAppApiRequester.get<GitHubUserResponse>('user');
  return response.data;
};
