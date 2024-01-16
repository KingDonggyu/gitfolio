'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { ThemeToggle } from './theme-toggle';

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider defaultTheme="system" {...props}>
      <span className="fixed bottom-7 right-10">
        <ThemeToggle />
      </span>
      {children}
    </NextThemesProvider>
  );
};
