import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('커뮤니티 글쓰기'),
  };
}

export default async function CommunityNewPage({
  params: { communityId },
}: {
  params: { communityId: string };
}) {
  console.log(communityId);
  return (
    <div className="h-full pb-20 pt-[35px]">
      <div>{communityId}</div>
    </div>
  );
}
