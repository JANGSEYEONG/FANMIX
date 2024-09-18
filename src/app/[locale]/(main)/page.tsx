import DOM_IDS from '@/constants/domIdentifiers';

import { Metadata } from 'next';

import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('홈'),
  };
}

// 메인 페이지
export default function MainPage() {
  const t = useTranslations('main_page');
  return (
    <main id={DOM_IDS.CURRENT_SCROLL_PAGE} className="h-full w-full px-5 page-scrollable-container">
      <h1>{t('{nickName}님 안녕하세요', { nickName: 'tpdud' })}</h1>
      <hr />
      <h1 className="h-[3000px]">{t('{nickName}님 안녕하세요', { nickName: 'tpdud' })}</h1>
      <h2>블러어어</h2>
    </main>
  );
}
