import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MarkdownViewer } from '@/components/markdown/markdown-viewer';
import { PortfolioDetailTabs } from './portfolio-detail-tabs';

interface PortfolioDetailSeetProps {
  portfolioCard: React.ReactNode;
  readme: string;
}

export const PortfolioDetailSeet = ({ portfolioCard, readme }: PortfolioDetailSeetProps) => {
  return (
    <Sheet>
      <SheetTrigger className="w-full">{portfolioCard}</SheetTrigger>
      <SheetContent className="!max-w-screen-lg w-full">
        <PortfolioDetailTabs
          readmeViewer={
            <MarkdownViewer markdown={readme} className="overflow-y-auto max-h-[85vh]" />
          }
        />
      </SheetContent>
    </Sheet>
  );
};
