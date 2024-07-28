'use client';

import { ThemeProvider } from 'next-themes';
import ReduxProvider from '@/data/datasource/redux/provider';
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ReduxProvider>{children}</ReduxProvider>
    </ThemeProvider>
  );
}
