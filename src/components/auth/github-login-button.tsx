import { Button } from '@/components/ui/button';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export const GitHubLoginButton = () => {
  const githubOAuthUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID}`;

  return (
    <Button className="h-auto" variant="outline" asChild>
      <Link href={githubOAuthUrl}>
        <GitHubLogoIcon width={30} height={30} />
        <span className="text-lg ml-2">GitHub로 시작하기</span>
      </Link>
    </Button>
  );
};
