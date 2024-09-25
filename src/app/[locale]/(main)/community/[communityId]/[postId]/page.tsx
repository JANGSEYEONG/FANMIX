import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

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
  return <div>{`${communityId} 번 커뮤니티의, ${postId}번째 글 상세보기`}</div>;
}
