import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileTextIcon, RocketIcon } from '@radix-ui/react-icons';

const tabs = {
  readme: 'readmd',
  task: 'task',
};

interface PortfolioDetailTabsProps {
  readmeViewer: React.ReactNode;
  taskViewer?: React.ReactNode;
}

export const PortfolioDetailTabs = ({ readmeViewer, taskViewer }: PortfolioDetailTabsProps) => {
  return (
    <Tabs defaultValue={tabs.readme}>
      <TabsList>
        <TabsTrigger value={tabs.readme}>
          <FileTextIcon className="mr-1" />
          README
        </TabsTrigger>
        {taskViewer && (
          <TabsTrigger value={tabs.task}>
            <RocketIcon className="mr-1" />
            이런 일을 했어요
          </TabsTrigger>
        )}
      </TabsList>
      <div>
        <TabsContent value={tabs.readme}>{readmeViewer}</TabsContent>
        {taskViewer && <TabsContent value={tabs.task}>{taskViewer}</TabsContent>}
      </div>
    </Tabs>
  );
};
