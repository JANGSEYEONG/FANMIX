import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import InfluencerProfileCard from '../_components/InfluencerProfileCard';
import { Separator } from '@/components/ui/separator';

import MyReview from './_components/MyReview';
import TextReviewCard from './_components/TextReviewCard';

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
    <div className="pb-20">
      <section
        aria-label="인플루언서 정보"
        className="sticky top-0 flex flex-col gap-2.5 bg-black pb-8">
        <InfluencerProfileCard {...influencerData} />
      </section>
      <section aria-label="내 한줄리뷰" className="mb-10 mt-2 px-5">
        <MyReview influencerId={parseInt(influencerId)} />
      </section>
      <Separator className="h-2 bg-neutral-900" />
      <section aria-label="한줄리뷰 전체 리스트" className="mt-[15px]">
        <div className="mb-[13px] flex items-center gap-[15px] px-5">
          <button className="text-lime-400 body3-m">최신순</button>
          <button className="text-neutral-400 body3-r">추천순</button>
        </div>
        <Separator className="h-[0.7px] bg-neutral-600" />
        <ul className="w-full flex-col-center">
          <li className="w-full">
            <TextReviewCard />
            <Separator className="h-[0.7px] bg-neutral-600" />
          </li>
          <li className="w-full">
            <TextReviewCard isMyReview />
            <Separator className="h-[0.7px] bg-neutral-600" />
          </li>
          <li className="w-full">
            <TextReviewCard />
            <Separator className="h-[0.7px] bg-neutral-600" />
          </li>
        </ul>
        <div className="mb-8 mt-7 text-center text-neutral-500 body3-r">
          모든 리뷰를 확인했어요.
        </div>
      </section>
    </div>
  );
}
