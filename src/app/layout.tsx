import { BuildConfig } from '@/config/config';
import { Providers } from '@/presentation/provider';
import type { Metadata } from 'next';
import './globals.css';
import 'swiper/css';
import 'swiper/css/zoom';

export const metadata: Metadata = {
  title: {
    default: BuildConfig.APP_NAME,
    template: `%s × ${BuildConfig.APP_NAME}`,
  },
  description: BuildConfig.APP_DESCRIPTION,
  icons: {
    icon: {
      url: BuildConfig.LOGO,
      type: 'image/png',
    },
    shortcut: { url: BuildConfig.LOGO, type: 'image/png' },
  },
  openGraph: {
    type: 'website',
    description: BuildConfig.APP_DESCRIPTION,
    images: [
      {
        url: BuildConfig.LOGO,
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
