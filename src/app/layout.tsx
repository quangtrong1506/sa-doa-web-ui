import { Providers } from '@/provider';
import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: {
    default: 'Ốc Sa Đoạ',
    template: '%s × Ốc Sa Đoạ',
  },
  description: 'Website chia sẻ tài liệu nghiên cứu khoa học hàng đầu thế giới',
  icons: {
    icon: {
      url: '/images/logo.png',
      type: 'image/png',
    },
    shortcut: { url: '/images/logo.png', type: 'image/png' },
  },
  openGraph: {
    type: 'website',
    url: 'https://www.ocsao.com',
    title: 'Ốc Sa Đoạ',
    description: 'Website chia sẻ tài liệu nghiên cứu khoa học hàng đầu thế giới',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Logo Ốc Sa Đoạ',
      },
    ],
    siteName: 'Ốc Sa Đoạ',
    locale: 'vi_VN',
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
