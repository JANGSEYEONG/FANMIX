import { Metadata } from 'next';

import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

import { Separator } from '@/components/ui/separator';
import InfluencerShowcase from './_components/InfluencerShowcase';
import PopularContentTabs from './_components/PopularContentTabs';
import InfluencerImageCarousel from './_components/InfluencerImageCarousel';

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
export default function MainPage() {
  const t = useTranslations('main_page');

  const influencerTest1 = {
    influencerId: '1',
    name: '알간지',
    imageSrc: '/assets/images/test/alganzi.png',
    isVerified: false,
  };

  const influencerTest2 = {
    influencerId: '2',
    name: '레오제이',
    imageSrc: '/assets/images/test/leo.png',
    isVerified: true,
  };

  const influencerTest3 = {
    influencerId: '3',
    name: '레오제이',
    imageSrc: '/assets/images/test/alganzi.png',
    isVerified: false,
  };

  const influencerTest4 = {
    influencerId: '5',
    name: '레오제이',
    imageSrc: '/assets/images/test/leo.png',
    isVerified: true,
  };
  return (
    <div className="mt-6 w-full flex-col-center">
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
        <InfluencerShowcase
          influencers={[influencerTest1, influencerTest2, influencerTest3, influencerTest4]}
        />
      </section>

      <section aria-label="인증 인플루언서" className="mb-[50px] flex w-full flex-col gap-4 pl-5">
        <header className="flex flex-col gap-0.5">
          <div className="mr-5 flex items-center justify-between">
            <h2 className="body1-b">{t('인증 인플루언서')}</h2>
            <button aria-label="인증 인플루언서 전체보기" className="text-neutral-500 body3-r">
              {t('전체보기')}
            </button>
          </div>
          <p className="text-neutral-300 body3-r">{t('절차를 통해 인증된 인플루언서입니다')}</p>
        </header>
        <InfluencerShowcase
          influencers={[influencerTest1, influencerTest2, influencerTest3, influencerTest4]}
        />
      </section>

      <Separator className="h-2 bg-neutral-900" />

      <section aria-label="인기 글, 리뷰 탭" className="mt-6 w-full px-5">
        <PopularContentTabs />
      </section>
    </div>
  );
}
