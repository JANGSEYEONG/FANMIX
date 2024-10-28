import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getInfluencerFollowStatusData } from '@/services/serverFetch/followServerService';

import FanChannelAccessMessage from '@/components/domain/fanChannel/FanChannelAccessMessage';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('팬채널 글쓰기'),
  };
}

export default async function FanChannelNewPage({
  params: { influencerId, communityId },
}: {
  params: { influencerId: string; communityId: string };
}) {
  // 서버에서 인플루언서를 팔로우중인지 체크
  const { data: isFollowing } = await getInfluencerFollowStatusData({
    influencerId: parseInt(influencerId),
  });
  console.log(influencerId, communityId);
  return (
    <div className="h-full pb-20 pt-[35px]">
      {isFollowing ? (
        <div>
          {influencerId}
          <div>{communityId}</div>
        </div>
      ) : (
        <FanChannelAccessMessage />
      )}
    </div>
  );
}
