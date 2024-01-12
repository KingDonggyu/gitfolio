import { Button } from '@/components/ui/button';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export const GitHubLoginButton = () => {
  return (
    <Button className="h-auto" variant="outline">
      <GitHubLogoIcon width={30} height={30} />
      <span className="text-lg ml-2">GitHub로 시작하기</span>
    </Button>
  );
};
