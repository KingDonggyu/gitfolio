import { PortfolioSummary } from 'portfolio';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { MarkdownViewer } from '@/components/markdown/markdown-viewer';
import { PortfolioDetailTabs } from './portfolio-detail-tabs';
import Link from 'next/link';
import { CodeIcon, StackIcon } from '@radix-ui/react-icons';

type PortfolioDetailHeaderProps = Pick<PortfolioSummary, 'githubRepositoryUrl' | 'techStack'>;

interface PortfolioDetailSeetProps extends PortfolioDetailHeaderProps {
  portfolioCard: React.ReactNode;
  readmeMarkdown: string;
  taskMarkdown: string;
}

export const PortfolioDetailSeet = ({
  portfolioCard,
  readmeMarkdown,
  taskMarkdown,
  ...headerProps
}: PortfolioDetailSeetProps) => {
  return (
    <Sheet>
      <SheetTrigger className="w-full">{portfolioCard}</SheetTrigger>
      <SheetContent className="portfolio-template-detail !max-w-screen-lg w-full px-12">
        <PortfolioDetailSeetHeader {...headerProps} />
        <hr className="text-border my-4" />
        <PortfolioDetailTabs
          readmeViewer={<PortfolioDetailMarkdownViewer markdown={readmeMarkdown} />}
          taskViewer={<PortfolioDetailMarkdownViewer markdown={taskMarkdown} />}
        />
      </SheetContent>
    </Sheet>
  );
};

const PortfolioDetailSeetHeader = ({
  githubRepositoryUrl,
  techStack,
}: PortfolioDetailHeaderProps) => {
  const techStackText = techStack.join(', ');

  return (
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
  );
};

const PortfolioDetailMarkdownViewer = ({ markdown }: { markdown: string }) => {
  return <MarkdownViewer markdown={markdown} className="overflow-y-auto max-h-[78vh]" />;
};
