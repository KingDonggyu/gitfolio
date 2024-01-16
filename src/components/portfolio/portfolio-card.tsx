'use client';

import Link from 'next/link';
import { CodeIcon, StackIcon } from '@radix-ui/react-icons';

import { type PortfolioSummary } from 'portfolio';
import { Card } from '@/components/ui/card';
import { formatToDatePeriodText } from '@/utils/formatToDatePeriodText';

export const PortfolioCard = ({
  title,
  description,
  startDate,
  endDate,
  githubRepositoryUrl,
  techStack,
}: PortfolioSummary) => {
  const periodText = formatToDatePeriodText(startDate, endDate);
  const techStackText = techStack.join(', ');

  return (
    <Card className="p-[20px] leading-loose hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-300">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold mb-[10px]">{title}</h2>
        <div className="text-muted-foreground">{periodText}</div>
      </div>
      <div className="flex items-center gap-2">
        <CodeIcon className="w-5 h-5" />
        <Link href={githubRepositoryUrl} target="_blank" onClick={event => event.stopPropagation()}>
          {githubRepositoryUrl}
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <StackIcon className="w-5 h-5" />
        <span>{techStackText}</span>
      </div>
      <div className="bg-muted px-[20px] py-[10px] rounded-md mt-[10px] text-start">
        {description}
      </div>
    </Card>
  );
};
