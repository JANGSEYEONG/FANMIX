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

export default function CommunityIndexPage() {
  return <div className="pb-20 pt-[35px]">커뮤니티 종류와 전체 종합 글이 나오는 페이지</div>;
}
