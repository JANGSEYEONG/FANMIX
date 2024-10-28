import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import CreateCommunityPostWrapper from './_components/CreateCommunityPostWrapper';

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

export default async function CommunityNewPage() {
  return (
    <div className="h-full pt-[55px]">
      <CreateCommunityPostWrapper />
    </div>
  );
}
