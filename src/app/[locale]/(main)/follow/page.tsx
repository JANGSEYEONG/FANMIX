import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import SlideBarTabs from '@/components/common/SlideBarTabs';
import FollowInfluencerList from './_components/FollowInfluencerList';
import FollowCommunityList from './_components/FollowCommunityList';
import { useTranslations } from 'next-intl';

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

export default function FollowPage() {
  const t = useTranslations('follow_page');
  const tabs = [
    {
      value: 'influencer',
      label: t('인플루언서'),
      content: <FollowInfluencerList />,
    },
    {
      value: 'community',
      label: t('커뮤니티'),
      content: <FollowCommunityList />,
    },
  ];
  return (
    <div className="w-full px-5 pb-20 pt-[35px]">
      <SlideBarTabs tabs={tabs} defaultValue="influencer" />
    </div>
  );
}
