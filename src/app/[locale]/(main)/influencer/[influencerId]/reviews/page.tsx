import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { Separator } from '@/components/ui/separator';
import InfluencerProfileCard from '../_components/InfluencerProfileCard';
import MyReview from './_components/MyReview';
import SpecificInfluencerReviewList from './_components/SpecificInfluencerReviewList';

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
  params: { influencerId },
}: {
  params: { influencerId: string };
}) {
  const { data: influencerData } = await getInfluencerData(influencerId);
  return (
    <div className="flex h-full flex-col">
      <section
        aria-label="인플루언서 정보"
        className="sticky top-0 flex flex-shrink-0 flex-col gap-2.5 bg-black pb-8">
        <InfluencerProfileCard {...influencerData} />
      </section>
      <section aria-label="내 한줄리뷰" className="mb-10 mt-2 flex-shrink-0 px-5">
        <MyReview influencerId={parseInt(influencerId)} />
      </section>
      <Separator className="h-2 flex-shrink-0 bg-neutral-900" />
      <section aria-label="한줄리뷰 전체 리스트" className="mt-[15px] flex-1 pb-20">
        <SpecificInfluencerReviewList influencerId={parseInt(influencerId)} />
      </section>
    </div>
  );
}
