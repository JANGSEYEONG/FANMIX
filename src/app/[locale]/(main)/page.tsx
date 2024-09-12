'use client';

import { useTranslations } from 'next-intl';

// 메인 페이지
export default function MainPage() {
  const t = useTranslations('loginPage');
  const t2 = useTranslations('mainPage');
  // #20240908.syjang, 아래 내용은 다국어 처리 및 언어 전환 예시로 작성해뒀습니다. 다음 pr 때 삭제 예정입니다.
  return (
    <main className="h-full w-full overflow-y-auto px-5 scrollbar-hide-smooth">
      메이인 메이인 메이인 메이인 메이인 메이인 메이인 메이인 메이인
      <h1>{t('나중에 하기')}</h1>
      <h1>{t2('{nickName}님 안녕하세요', { nickName: 'tpdud' })}</h1>
      <h1>{t2('{nickName}님 안녕하세요', { nickName: 'tpdud' })}</h1>
      <h1>{t2('{nickName}님 안녕하세요', { nickName: 'tpdud' })}</h1>
      <h1>{t2('{nickName}님 안녕하세요', { nickName: 'tpdud' })}</h1>
      <h1>{t2('{nickName}님 안녕하세요', { nickName: 'tpdud' })}</h1>
      <hr />
      <h1 className="h-[3000px]">{t2('{nickName}님 안녕하세요', { nickName: 'tpdud' })}</h1>
      <h2>블러어어</h2>
    </main>
  );
}
