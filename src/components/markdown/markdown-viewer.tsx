'use client';

import '@uiw/react-markdown-preview/markdown.css';
import MDEditor from '@uiw/react-md-editor';
import { MarkdownTheme } from './markdown-theme';

interface MarkdownViewerProps {
  markdown: string;
}

export const MarkdownViewer = ({ markdown }: MarkdownViewerProps) => {
  return (
    <MarkdownTheme>
      <MDEditor.Markdown source={markdown} />
    </MarkdownTheme>
  );
};
