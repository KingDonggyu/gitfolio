'use server';

import { postGitHubLogin } from '@/repository/apis/auth';
import { AuthCookie } from '@/repository/cookies/auth';

export const login = async (code: string) => {
  const { access_token } = await postGitHubLogin({
    code: code,
    client_id: process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID,
    client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
  });

  new AuthCookie().login(access_token);
};
