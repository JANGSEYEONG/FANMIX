'use client';

import { DOM_IDS } from '@/constants/domIdentifiers';
import { useTranslations } from 'next-intl';

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
