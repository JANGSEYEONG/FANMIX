import { Metadata } from 'next';

import { getTranslations } from 'next-intl/server';

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
  params: { communityId, postId },
}: {
  params: { communityId: string; postId: string };
}) {
  return (
    <div>{`인플루언서의 팬채널인 ${communityId}번 커뮤니티의, ${postId}번째 글 상세 페이지`}</div>
  );
}
