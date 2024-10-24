import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { Separator } from '@/components/ui/separator';

import MyReview from './_components/MyReview';
import InfluencerProfileCard from '../_components/InfluencerProfileCard';
import SpecificInfluencerReviewWrapper from './_components/SpecificInfluencerReviewWrapper';

import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';
import ErrorHandlingWrapper from '@/components/common/error/ErrorHandlingWrapper';

import { getInfluencerData } from '@/services/serverFetch/influencerServerService';

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

export default async function InfluencerReviewListPage({
  params: { locale, influencerId },
}: {
  params: { locale: string; influencerId: string };
}) {
  const t = await getTranslations({ locale, namespace: 'influencer_reviews_page' });
  const { data: influencerData } = await getInfluencerData(influencerId);
  return (
    <div className="flex h-full flex-col">
      <section
        aria-label="인플루언서 정보"
        className="sticky top-0 flex flex-shrink-0 flex-col gap-2.5 bg-black pb-8">
        <InfluencerProfileCard {...influencerData} />
      </section>
      <section aria-label="내 한줄리뷰" className="mb-10 mt-2 flex-shrink-0 px-5">
        <ErrorHandlingWrapper
          errorFallbackMessage={t('내 최근 한줄리뷰를 가져오는데 문제가 생겼어요')}
          errorClassName="mt-10 w-full"
          suspenseFallback={<ComponentSpinner className="mt-10 w-full" />}>
          <MyReview influencerId={parseInt(influencerId)} />
        </ErrorHandlingWrapper>
      </section>
      <Separator className="h-2 flex-shrink-0 bg-neutral-900" />
      <section aria-label="한줄리뷰 전체 리스트" className="mt-[15px] flex-1 pb-20">
        <SpecificInfluencerReviewWrapper influencerId={parseInt(influencerId)} />
      </section>
    </div>
  );
}
