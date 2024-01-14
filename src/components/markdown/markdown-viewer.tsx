'use client';

import '@uiw/react-markdown-preview/markdown.css';
import MDEditor from '@uiw/react-md-editor';
import { MarkdownTheme } from './markdown-theme';

interface MarkdownViewerProps extends React.HTMLAttributes<HTMLDivElement> {
  markdown: string;
}

export const MarkdownViewer = ({ markdown, ...props }: MarkdownViewerProps) => {
  return (
    <MarkdownTheme {...props}>
      <MDEditor.Markdown source={markdown} />
    </MarkdownTheme>
  );
};
