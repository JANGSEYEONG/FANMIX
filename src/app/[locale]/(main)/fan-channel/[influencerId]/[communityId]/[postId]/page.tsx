import { Metadata } from 'next';

import { getTranslations } from 'next-intl/server';

import CheckFanChannelAccess from '@/components/domain/fanChannel/CheckFanChannelAccess';

import FanChannelPostContent from './_components/FanChannelPostContent';
import FanChannelPostCommentList from './_components/FanChannelPostCommentList';
import FanChannelPostCommentForm from './_components/FanChannelPostCommentForm';

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

export default function FanChannelPostPage({
  params: { influencerId, communityId, postId },
}: {
  params: { influencerId: string; communityId: string; postId: string };
}) {
  const postInfo = {
    influencerId: parseInt(influencerId),
    communityId: parseInt(communityId),
    postId: parseInt(postId),
  };

  return (
    <CheckFanChannelAccess influencerId={parseInt(influencerId)}>
      <div className="flex h-full flex-col gap-y-[25px] pb-[75px] pt-[35px]">
        <FanChannelPostContent {...postInfo} />
        <FanChannelPostCommentList {...postInfo} />
        <FanChannelPostCommentForm {...postInfo} />
      </div>
    </CheckFanChannelAccess>
  );
}
