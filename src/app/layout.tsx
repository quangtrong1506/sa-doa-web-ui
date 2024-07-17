import { Providers } from '@/provider';
import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: {
    default: 'Ốc Sa Đoạ',
    template: '%s × Ốc Sa Đoạ',
  },
  description: 'Ốc Sa Đoạ - Website chia sẻ tài liệu nghiên cứu khoa học lớn nhất thế giới',
  icons: {
    icon: {
      url: '/images/logo.png',
      type: 'image/png',
    },
    shortcut: { url: '/images/logo.png', type: 'image/png' },
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
