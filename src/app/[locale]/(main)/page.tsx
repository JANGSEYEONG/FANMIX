import { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

import { Separator } from '@/components/ui/separator';

import LogoutHandler from './_components/LogoutHandler';
import InfluencerShowcase from './_components/InfluencerShowcase';
import PopularContentTabs from './_components/PopularContentTabs';
import InfluencerImageCarousel from './_components/InfluencerImageCarousel';

import { getWeeklyHotInfluencersData } from '@/services/serverFetch/influencerServerService';
import { getRecentlyVerifiedInfluencersData } from '@/services/serverFetch/influencerServerService';
import { getPopularReviewsData } from '@/services/serverFetch/reviewServerService';
import { getPopularPostsData } from '@/services/serverFetch/communityServerService';

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
export default async function MainPage({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const t = await getTranslations({ locale, namespace: 'main_page' });
  const isLogout = searchParams.isLogout === 'true';

  const [
    weeklyHotInfluencerResult,
    recentlyVerifiedInfluencersResult,
    popularReviewsResult,
    popularPostsResult,
  ] = await Promise.allSettled([
    getWeeklyHotInfluencersData(),
    getRecentlyVerifiedInfluencersData(),
    getPopularReviewsData(),
    getPopularPostsData(),
  ]);

  const weeklyHotInfluencerData =
    weeklyHotInfluencerResult.status === 'fulfilled' ? weeklyHotInfluencerResult.value.data : [];
  const recentlyVerifiedInfluencersData =
    recentlyVerifiedInfluencersResult.status === 'fulfilled'
      ? recentlyVerifiedInfluencersResult.value.data
      : [];
  const popularReviewsData =
    popularReviewsResult.status === 'fulfilled' ? popularReviewsResult.value.data : [];
  const popularPostsData =
    popularPostsResult.status === 'fulfilled' ? popularPostsResult.value.data : [];

  return (
    <div className="mt-6 w-full pb-20 pt-[35px] flex-col-center">
      {isLogout && <LogoutHandler />}
      <section aria-label="추천 인플루언서" className="relative mb-7 w-full">
        <InfluencerImageCarousel />
      </section>

      <section aria-label="주간 HOT 10" className="mb-10 flex w-full flex-col gap-4 pl-5">
        <header className="flex flex-col gap-0.5">
          <h2 className="body1-b">{t('주간 HOT 10')}</h2>
          <p className="text-neutral-300 body3-r">
            {t('이번 주 가장 핫한 인플루언서를 만나보세요')}
          </p>
        </header>
        <InfluencerShowcase influencers={weeklyHotInfluencerData} />
      </section>

      <section aria-label="인증 인플루언서" className="mb-[50px] flex w-full flex-col gap-4 pl-5">
        <header className="flex flex-col gap-0.5">
          <div className="mr-5 flex items-center justify-between">
            <h2 className="body1-b">{t('인증 인플루언서')}</h2>
            <Link
              href="/fan-channel?sort=CONFIRM_STATUS"
              aria-label="인증 인플루언서 전체보기"
              className="text-neutral-500 body3-r">
              {t('전체보기')}
            </Link>
          </div>
          <p className="text-neutral-300 body3-r">{t('절차를 통해 인증된 인플루언서입니다')}</p>
        </header>
        <InfluencerShowcase influencers={recentlyVerifiedInfluencersData} />
      </section>

      <Separator className="h-2 bg-neutral-900" />
      <section aria-label="인기 글, 리뷰 탭" className="mt-6 w-full px-5">
        <PopularContentTabs reviews={popularReviewsData} posts={popularPostsData} />
      </section>
    </div>
  );
}
