'use client';

import ReduxProvider from '@/redux/provider';
import { ThemeProvider } from 'next-themes';
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ReduxProvider>{children}</ReduxProvider>
    </ThemeProvider>
  );
}
