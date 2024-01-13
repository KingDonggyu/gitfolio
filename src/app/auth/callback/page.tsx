import { postGitHubLogin } from '@/repository/apis/auth';
import { redirect } from 'next/navigation';

const AuthCallbackPage = async ({ searchParams }: { searchParams: { code: string } }) => {
  if (!searchParams.code) {
    redirect('/');
  }

  try {
    const { access_token: accessToken } = await postGitHubLogin({
      code: searchParams.code,
      client_id: process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID,
      client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
    });
  } catch {
    redirect('/');
  }

  redirect('/portfolio/template');
};

export default AuthCallbackPage;
