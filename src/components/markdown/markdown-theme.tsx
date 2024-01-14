'use client';

import { useTheme } from 'next-themes';

interface MarkdownThemeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const MarkdownTheme = ({ children, ...props }: MarkdownThemeProps) => {
  const { theme, systemTheme } = useTheme();
  const colorMode = theme === 'system' ? systemTheme : theme;

  return (
    <div data-color-mode={colorMode} {...props}>
      {children}
    </div>
  );
};
