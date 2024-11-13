import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import CommunityPostContent from './_components/CommunityPostContent';
import CommunityPostCommentList from './_components/CommunityPostCommentList';
import CommunityPostCommentForm from './_components/CommunityPostCommentForm';

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

export default function CommunityPostPage({
  params: { communityId, postId },
}: {
  params: { communityId: string; postId: string };
}) {
  const postInfo = {
    communityId: parseInt(communityId),
    postId: parseInt(postId),
  };

  return (
    <div className="flex h-full flex-col gap-y-[25px] pb-[75px] pt-[35px]">
      <CommunityPostContent {...postInfo} />
      <CommunityPostCommentList {...postInfo} />
      <CommunityPostCommentForm {...postInfo} />
    </div>
  );
}
