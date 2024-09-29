import { Metadata } from 'next';

import { getTranslations } from 'next-intl/server';

import GoBackButton from '@/components/common/GoBackButton';
import LoginImageCarousel from './_components/LoginImageCarousel';
import GoogleLoginButton from './_components/GoogleLoginButton';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('로그인'),
  };
}

export default function LoginPage() {
  return (
    <main className="relative flex h-full w-full flex-col items-center justify-end pb-[104px] dark-gradient">
      <nav className="absolute right-5 top-2.5">
        <GoBackButton variant="close" />
      </nav>
      <section className="w-full gap-[50px] flex-col-center">
        <LoginImageCarousel />
        <div className="w-full gap-6 px-5 flex-col-center">
          <GoogleLoginButton />
          <GoBackButton variant="word" />
        </div>
      </section>
    </main>
  );
}
