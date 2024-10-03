import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';

import '../globals.css';

import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

import ResponsiveLayout from '@/components/layout/ResponsiveLayout';
import TanstackQueryProvider from '@/components/common/TanstackQueryProvider';

const suit = localFont({
  src: '../../../public/assets/fonts/SUIT-Variable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-suit-variable',
});

export const metadata: Metadata = {
  title: {
    template: '%s | FANMIX',
    default: 'FANMIX', // 페이지 타이틀이 없을 때 사용될 기본값
  },
  description: 'FANMIX와 함께 인플루언서의 다양한 컨텐츠와 커뮤니티를 만나보세요.',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/assets/images/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/images/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/images/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/assets/images/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/images/icons/icon-180x180.png', sizes: '180x180', type: 'image/png' },
      { url: '/assets/images/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#000000',
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} className={suit.variable}>
      <body className={suit.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <TanstackQueryProvider>
            <ResponsiveLayout>{children}</ResponsiveLayout>
          </TanstackQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
