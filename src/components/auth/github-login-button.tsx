import { Button } from '@/components/ui/button';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export const GitHubLoginButton = () => {
  return (
    <Button className="tw-h-auto" variant="outline">
      <GitHubLogoIcon width={30} height={30} />
      <span className="tw-text-lg tw-ml-2">GitHub로 시작하기</span>
    </Button>
  );
};
