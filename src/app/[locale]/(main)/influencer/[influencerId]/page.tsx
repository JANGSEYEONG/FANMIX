import { Suspense } from 'react';
import { Metadata, Viewport } from 'next';
import { getTranslations } from 'next-intl/server';

import { Separator } from '@/components/ui/separator';

import ContentTraits from './_components/ContentTraits';
import ReviewScoreCard from './_components/ReviewScoreCard';
import InfluencerIntroduce from './_components/InfluencerIntroduce';
import ViewAllReviewsButton from './_components/ViewAllReviewsButton';
import InfluencerProfileCard from './_components/InfluencerProfileCard';

import TooltipBox from '@/components/common/TooltipBox';
import PageSpinner from '@/components/common/spinner/PageSpinner';

import { getInfluencerData } from '@/services/serverFetch/influencerServerService';
import BestReview from './_components/BestReview';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('인플루언서'),
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#FF5B46',
};
export default async function InfluencerPage({
  params: { locale, influencerId },
}: {
  params: { locale: string; influencerId: string };
}) {
  const t = await getTranslations({ locale, namespace: 'influencer_page' });
  const { data: influencerData } = await getInfluencerData(influencerId);
  const influencerIntroduce = {
    influencerId: influencerData.influencerId,
    communityId: influencerData.fanChannelId,
    selfIntroduction: influencerData.selfIntroduction,
  };
  const influencerContentTraits = {
    originalityScore: influencerData.contentsOrientationList[0],
    toneScore: influencerData.contentsOrientationList[1],
    energyScore: influencerData.contentsOrientationList[2],
  };

  const reviewScoreCard = {
    contentsRating: influencerData.contentsRating,
    communicationRating: influencerData.communicationRating,
    trustRating: influencerData.trustRating,
  };

  return (
    <Suspense fallback={<PageSpinner />}>
      <div className="pb-20">
        <section aria-label="인플루언서 정보" className="mb-10 flex flex-col gap-2.5">
          <InfluencerProfileCard {...influencerData} />
        </section>
        <section aria-label="인플루언서 소개" className="mb-[30px] px-5">
          <InfluencerIntroduce {...influencerIntroduce} />
        </section>
        <section
          aria-label="콘텐츠 지향성"
          className="mb-6 flex flex-col justify-center gap-2.5 px-5">
          <div className="flex items-center gap-1.5">
            <h2 className="body3-m">{t('콘텐츠 지향성')}</h2>
            <TooltipBox
              content={t(
                '이 섹션에서는 인플루언서가 자신의 콘텐츠 스타일을 직접 지정한 내용을 확인할 수 있어요',
              )}
            />
          </div>
          <ContentTraits {...influencerContentTraits} />
        </section>
        <section aria-label="리뷰 평균" className="mb-10 flex flex-col justify-center gap-2.5 px-5">
          <h2 className="body3-m">{t('리뷰 평균')}</h2>
          <ReviewScoreCard {...reviewScoreCard} />
        </section>
        <Separator className="h-2 w-full bg-neutral-900" />
        <section aria-label="BEST 리뷰" className="mb-5 mt-[42px]">
          {influencerData.bestReview && (
            <BestReview
              influencerId={influencerData.influencerId}
              reviewsCount={influencerData.totalReviewCount}
              bestReview={influencerData.bestReview}
            />
          )}
        </section>
        <nav className="px-5">
          <ViewAllReviewsButton influencerId={influencerData.influencerId} />
        </nav>
      </div>
    </Suspense>
  );
}
