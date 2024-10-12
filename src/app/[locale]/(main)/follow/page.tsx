import dynamic from 'next/dynamic';

import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import SlideBarTabs from '@/components/common/SlideBarTabs';
import FollowInfluencerList from './_components/FollowInfluencerList';
const FollowCommunityList = dynamic(() => import('./_components/FollowCommunityList'));

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('팔로우'),
  };
}

const TAB_TYPES = {
  FOLLOW_INFLUENCERS: 'FOLLOW_INFLUENCERS',
  FOLLOW_COMMUNITY: 'FOLLOW_COMMUNITY',
} as const;

export default function FollowPage() {
  const t = useTranslations('follow_page');
  const tabs = [
    {
      value: TAB_TYPES.FOLLOW_INFLUENCERS,
      label: t('인플루언서'),
      content: <FollowInfluencerList />,
    },
    {
      value: TAB_TYPES.FOLLOW_COMMUNITY,
      label: t('커뮤니티'),
      content: <FollowCommunityList />,
    },
  ];
  return (
    <div className="h-full w-full px-5 pt-[35px]">
      <SlideBarTabs tabs={tabs} defaultValue={TAB_TYPES.FOLLOW_INFLUENCERS} />
    </div>
  );
}
