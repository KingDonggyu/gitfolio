import { PortfolioSummary } from 'portfolio';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { MarkdownViewer } from '@/components/markdown/markdown-viewer';
import { PortfolioDetailTabs } from './portfolio-detail-tabs';
import Link from 'next/link';
import { CodeIcon, StackIcon } from '@radix-ui/react-icons';

interface PortfolioDetailSeetProps
  extends Pick<PortfolioSummary, 'githubRepositoryUrl' | 'techStack'> {
  portfolioCard: React.ReactNode;
  readme: string;
}

export const PortfolioDetailSeet = ({
  portfolioCard,
  readme,
  githubRepositoryUrl,
  techStack,
}: PortfolioDetailSeetProps) => {
  const techStackText = techStack.join(', ');

  return (
    <Sheet>
      <SheetTrigger className="w-full">{portfolioCard}</SheetTrigger>
      <SheetContent className="portfolio-template-detail !max-w-screen-lg w-full px-12">
        <SheetHeader className="mt-6 text-sm">
          <div className="flex items-center gap-2">
            <CodeIcon className="w-5 h-5" />
            <Link href={githubRepositoryUrl} target="_blank">
              {githubRepositoryUrl}
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <StackIcon className="w-5 h-5" />
            <span>{techStackText}</span>
          </div>
        </SheetHeader>
        <hr className="text-border my-4" />
        <PortfolioDetailTabs
          readmeViewer={
            <MarkdownViewer markdown={readme} className="overflow-y-auto max-h-[80vh]" />
          }
        />
      </SheetContent>
    </Sheet>
  );
};
