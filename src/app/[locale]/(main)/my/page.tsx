import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { Separator } from '@/components/ui/separator';
import ErrorHandlingWrapper from '@/components/common/error/ErrorHandlingWrapper';
import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';

import MyProfile from './_components/MyProfile';
import LogoutButton from './edit/_components/LogoutButton';
import MyPageMenuList from './_components/MyPageMenuList';
import MyOnePickInfluencer from './_components/MyOnePickInfluencer';

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
  const t = useTranslations('one_pick_influencer');
  return (
    <div className="w-full pb-20 pt-[35px]">
      <section aria-label="내 프로필" className="mx-5 mb-8 flex flex-col gap-4 pt-7">
        <MyProfile />
      </section>
      <section aria-label="내 원픽 인플루언서" className="mb-12">
        <ErrorHandlingWrapper
          errorFallbackMessage={t(
            '원픽 인플루언서를 불러오는데 문제가 발생했어요 다시 시도해 주세요',
          )}
          suspenseFallback={<ComponentSpinner />}>
          <MyOnePickInfluencer />
        </ErrorHandlingWrapper>
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
