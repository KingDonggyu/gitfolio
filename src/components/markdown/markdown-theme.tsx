'use client';

import { useTheme } from 'next-themes';

export const MarkdownTheme = ({ children }: { children: React.ReactNode }) => {
  const { theme, systemTheme } = useTheme();
  const colorMode = theme === 'system' ? systemTheme : theme;

  return <div data-color-mode={colorMode}>{children}</div>;
};
