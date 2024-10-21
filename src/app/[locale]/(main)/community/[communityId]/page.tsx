import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import CommunityBanner from './_components/CommunityBanner';
import CommunityPostList from './_components/CommunityPostList';
import CommunityBadgeNavigation from './_components/CommunityBadgeNavigation';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('커뮤니티'),
  };
}

export default function CommunityPage({
  params: { communityId },
}: {
  params: { communityId: string };
}) {
  console.log(communityId);
  return (
    <div className="pt-[35px]">
      <CommunityBadgeNavigation communityId={parseInt(communityId)} />
      <CommunityBanner communityId={parseInt(communityId)} />
      <CommunityPostList />
    </div>
  );
}
