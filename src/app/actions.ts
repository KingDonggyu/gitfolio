'use server';

import { authApi, userApi } from '@/repository/apis';
import { AuthCookie } from '@/repository/cookies';
import { userDBService } from '@/repository/db-services';

export const signin = async () => {
  const user = await userApi.fetchUser();
  await userDBService.signup(user);
};

export const login = async (code: string) => {
  const githubOAuthClientId = process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID;
  const githubOAuthClientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;

  if (!githubOAuthClientId) {
    throw new Error('NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID 환경 변수가 존재하지 않습니다');
  }

  if (!githubOAuthClientSecret) {
    throw new Error('GITHUB_OAUTH_CLIENT_SECRET 환경 변수가 존재하지 않습니다');
  }

  const { access_token } = await authApi.postGitHubLogin({
    code: code,
    client_id: githubOAuthClientId,
    client_secret: githubOAuthClientSecret,
  });

  new AuthCookie().login(access_token);
  await signin();
};
