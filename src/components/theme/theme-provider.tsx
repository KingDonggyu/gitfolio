'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { ThemeToggle } from './theme-toggle';

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider {...props}>
      <span className="fixed top-7 right-10">
        <ThemeToggle />
      </span>
      {children}
    </NextThemesProvider>
  );
};
