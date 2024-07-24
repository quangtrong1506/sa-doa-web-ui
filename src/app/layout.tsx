import { BuildConfig } from '@/config/config';
import { Providers } from '@/presentation/provider';
import type { Metadata } from 'next';
import 'swiper/css';
import 'swiper/css/zoom';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: BuildConfig.APP_NAME,
    template: '%s × Ốc Sa Đoạ',
  },
  description: BuildConfig.APP_DESCRIPTION,
  icons: {
    icon: {
      url: '/images/logo.png',
      type: 'image/png',
    },
    shortcut: { url: '/images/logo.png', type: 'image/png' },
  },
  openGraph: {
    type: 'website',
    description: BuildConfig.APP_DESCRIPTION,
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Logo ' + BuildConfig.APP_NAME,
      },
    ],
    siteName: BuildConfig.APP_NAME,
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
