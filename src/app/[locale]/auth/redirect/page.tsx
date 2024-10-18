import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import GoogleLoginHandler from './_components/GoogleLoginHandler';
import PageSpinner from '@/components/common/spinner/PageSpinner';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('로그인 중'),
  };
}

export default function LoginRedirectPage() {
  return (
    <main className="h-full w-full flex-center">
      <PageSpinner />
      <GoogleLoginHandler />
    </main>
  );
}
