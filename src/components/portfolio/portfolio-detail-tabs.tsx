import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileTextIcon } from '@radix-ui/react-icons';

const tabs = {
  readme: 'readmd',
};

interface PortfolioDetailTabsProps {
  readme: React.ReactNode;
}

export const PortfolioDetailTabs = ({ readme }: PortfolioDetailTabsProps) => {
  return (
    <Tabs defaultValue={tabs.readme} className="p-6">
      <TabsList>
        <TabsTrigger value={tabs.readme}>
          <FileTextIcon className="mr-1" />
          README
        </TabsTrigger>
        <TabsTrigger value="password">저는 이런 일을 했어요</TabsTrigger>
      </TabsList>
      <div>
        <TabsContent value={tabs.readme}>{readme}</TabsContent>
        <TabsContent value="password"></TabsContent>
      </div>
    </Tabs>
  );
};
