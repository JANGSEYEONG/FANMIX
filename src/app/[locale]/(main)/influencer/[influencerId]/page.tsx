import { Metadata, Viewport } from 'next';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/routing';
import { ROUTES } from '@/constants/routes';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { VscChevronRight } from 'react-icons/vsc';

import InfluencerProfileCard from './_components/InfluencerProfileCard';
import ContentTraits from './_components/ContentTraits';
import ReviewScoreCard from './_components/ReviewScoreCard';
import BestReviewCard from './_components/BestReviewCard';
import TooltipBox from '@/components/common/TooltipBox';

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

export default function InfluencerPage({
  params: { influencerId },
}: {
  params: { influencerId: string };
}) {
  const t = useTranslations('influencer_page');
  console.log('InfluencerPage:' + influencerId);
  return (
    <div className="pb-20">
      <section aria-label="인플루언서 정보" className="mb-10 flex flex-col gap-2.5">
        <InfluencerProfileCard />
      </section>
      <section aria-label="인플루언서 소개" className="mb-[30px] px-5">
        <div className="flex items-center justify-between bg-neutral-800 py-[14px] pl-[18px] pr-2.5">
          <p className="w-[250px] text-neutral-100 body2-m">Hi Eunzel who loves to create!</p>
          <button className="group flex items-center">
            <span className="text-lime-400 body3-r">{t('팬채널')}</span>
            <VscChevronRight className="h-[18px] w-[18px] text-lime-400 group-hover:scale-transition-105" />
          </button>
        </div>
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
        <ContentTraits />
      </section>
      <section aria-label="리뷰 평균" className="mb-10 flex flex-col justify-center gap-2.5 px-5">
        <h2 className="body3-m">{t('리뷰 평균')}</h2>
        <ReviewScoreCard />
      </section>
      <Separator className="h-2 w-full bg-neutral-900" />
      <section
        aria-label="BEST 리뷰"
        className="mb-5 mt-[42px] flex flex-col justify-center gap-[15px] px-5">
        <div className="flex items-center gap-[5px]">
          <h2 className="body3-m">{t('BEST 리뷰')}</h2>
          <span className="text-neutral-300 sub1-m">
            {t('리뷰 {reviewsCount}개 중', { reviewsCount: 364 })}
          </span>
        </div>
        <BestReviewCard />
      </section>
      <nav className="px-5">
        <Link href={ROUTES.INFLUENCER_REVIEW_LIST.PATH.replace('[influencerId]', influencerId)}>
          <Button className="w-full body3-r" variant="outline">
            {t('한줄리뷰 전체보기')}
          </Button>
        </Link>
      </nav>
    </div>
  );
}
