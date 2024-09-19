import DOM_IDS from '@/constants/domIdentifiers';

import { Metadata } from 'next';

import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

import { ROUTES } from '@/constants/routes';

import { Link } from '@/i18n/routing';
import { Separator } from '@/components/ui/separator';

import { MyProfileCard } from '@/components/domain/user';
import OnePickInfluencer from '@/components/domain/influencer/OnePickInfluencer';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('마이페이지'),
  };
}

export default function MyPage() {
  const t = useTranslations('my_page');
  const data = {
    userNickName: '닉네임이다',
    imageSrc: '', // 비워질 경우, fallback으로 이름 첫글자 표시
    introduction:
      '한줄소개 텍스트 한줄소개 텍스트 한줄소개 텍스트 한줄소개 텍스트 한줄소개 텍스트 한줄소개 텍스트 한줄소개 텍스트 한줄소개',
  };
  const onePickData = {
    influencerName: '으뜸언니',
    imageSrc: '', // 비워질 경우, fallback으로 이름 첫글자 표시
  };

  return (
    <main id={DOM_IDS.CURRENT_SCROLL_PAGE} className="h-full w-full pt-7 page-scrollable-container">
      <section aria-label="사용자 프로필" className="mx-5 mb-8 flex flex-col gap-4">
        <MyProfileCard
          imageSrc={data.imageSrc}
          userNickName={data.userNickName}
          introduction={data.introduction}
        />
      </section>
      <section aria-label="원픽 인플루언서" className="mb-12">
        <OnePickInfluencer onePickData={onePickData} />
      </section>
      <Separator className="h-[8px] bg-neutral-900" />
      <nav aria-label="사용자 메뉴" className="mx-5 mb-9 mt-9">
        <MyPageMenuList />
      </nav>
      <Separator className="h-[8px] bg-neutral-900" />
      {/* 로그아웃 로직 훅 분리하기 */}
      <footer className="mx-5 mt-6">
        <button className="text-neutral-400 body2-r">{t('로그아웃')}</button>
      </footer>
    </main>
  );
}

const MyPageMenuList = () => {
  const t = useTranslations('my_page');

  const menuItems = [
    { label: ROUTES.MY_ACTIVITY_DETAILS.LABEL, path: ROUTES.MY_ACTIVITY_DETAILS.PATH },
    { label: ROUTES.FOLLOW.LABEL, path: ROUTES.FOLLOW.PATH },
    { label: ROUTES.CUSTOMER_CENTER.LABEL, path: ROUTES.CUSTOMER_CENTER.PATH },
  ];

  return (
    <ul className="flex flex-col justify-center gap-6 body1-r">
      {menuItems.map((item) => {
        return (
          <Link key={item.label} href={item.path} className="h-6">
            {t(item.label)}
          </Link>
        );
      })}
    </ul>
  );
};
