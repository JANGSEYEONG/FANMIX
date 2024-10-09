import { Metadata } from 'next';

import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

import { ROUTES } from '@/constants/routes';

import { Link } from '@/i18n/routing';
import { Separator } from '@/components/ui/separator';

import MyProfile from './_components/MyProfile';
import OnePickInfluencer from '@/components/domain/influencer/OnePickInfluencer';
import LogoutButton from './edit/_components/LogoutButton';

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
  const onePickData = {
    influencerId: 3,
    communityId: 3,
    influencerName: '으뜸언니',
    influencerImageUrl: '',
    isOthersPick: false,
  };

  return (
    <div className="w-full pb-20 pt-[35px]">
      <section aria-label="내 프로필" className="mx-5 mb-8 flex flex-col gap-4 pt-7">
        <MyProfile />
      </section>
      <section aria-label="내 원픽 인플루언서" className="mb-12">
        <OnePickInfluencer {...onePickData} />
      </section>
      <Separator className="h-[8px] bg-neutral-900" />
      <nav aria-label="사용자 메뉴" className="mx-5 mb-9 mt-9">
        <MyPageMenuList />
      </nav>
      <Separator className="h-[8px] bg-neutral-900" />
      <footer className="mx-5 mt-6">
        <LogoutButton />
      </footer>
    </div>
  );
}

const MyPageMenuList = () => {
  const t = useTranslations('my_page');

  const menuItems = [
    { label: ROUTES.MY_ACTIVITY_HISTORY.LABEL, path: ROUTES.MY_ACTIVITY_HISTORY.PATH },
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
