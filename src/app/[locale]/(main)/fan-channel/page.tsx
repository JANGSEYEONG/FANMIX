import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { Separator } from '@/components/ui/separator';
import FanChannelInfluencerCard from './_components/FanChannelInfluencerCard';
import { useTranslations } from 'next-intl';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('팬채널'),
  };
}

export default function FanChannelIndexPage() {
  const t = useTranslations('fan_channel_index_page');
  const testData = {
    influencerId: '3',
    communityId: 'com_67890',
    influencerName: '김인플루',
    influencerImageUrl: '/assets/images/test/alganzi.png',
    followerCount: 34567,
    postCount: 1024,
    latestPostDate: '2023-06-15T09:30:00Z',
    isFollowing: false,
  };
  return (
    <div className="w-full px-5 pb-20 pt-[65px]">
      <section aria-label="인증된 인플루언서들의 팬채널 리스트">
        <div
          role="group"
          aria-label="정렬 옵션"
          className="mb-[15px] flex items-center gap-x-[15px] text-neutral-400 body3-r">
          <button className="text-lime-400 body3-m">{t('채널인기순')}</button>
          <button>{t('최신등록순')}</button>
          <button>{t('이름순')}</button>
        </div>
        <ul>
          <li>
            <FanChannelInfluencerCard {...testData} isFollowing />
            <Separator className="my-5 h-[1px] bg-neutral-800" />
          </li>
          <li>
            <FanChannelInfluencerCard {...testData} />
            <Separator className="my-5 h-[1px] bg-neutral-800" />
          </li>
          <li>
            <FanChannelInfluencerCard {...testData} />
          </li>
        </ul>
      </section>
    </div>
  );
}
