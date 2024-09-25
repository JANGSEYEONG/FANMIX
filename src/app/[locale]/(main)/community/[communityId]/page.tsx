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

export default function CommunityPage({
  params: { communityId },
}: {
  params: { communityId: string };
}) {
  return <div>{`${communityId}번 커뮤니티 페이지 (글 리스트)`}</div>;
}
