import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MarkdownViewer } from '@/components/markdown/markdown-viewer';
import { PortfolioDetailTabs } from './portfolio-detail-tabs';

interface PortfolioSeetProps {
  portfolioCard: React.ReactNode;
  readme: string;
}

export const PortfolioSeet = ({ portfolioCard, readme }: PortfolioSeetProps) => {
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
