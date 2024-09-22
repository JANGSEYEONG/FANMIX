import { Metadata } from 'next';

import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

import SlideBarTabs from '@/components/common/SlideBarTabs';

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
  const tabs = [
    {
      value: '1',
      label: '인기 글',
      content: <div className="mt-2.5 w-full text-center">인기 글 내역</div>,
    },
    {
      value: '2',
      label: '인기 리뷰',
      content: <div className="mt-2.5 w-full text-center">인기 리뷰 내역</div>,
    },
  ];

  return (
    <div>
      <h1>{t('{nickName}님 안녕하세요', { nickName: 'tpdud' })}</h1>
      <SlideBarTabs tabs={tabs} defaultValue="1" />
      <h1 className="h-[3000px]">{t('{nickName}님 안녕하세요', { nickName: 'tpdud' })}</h1>
      <h2>블러어어</h2>
    </div>
  );
}
