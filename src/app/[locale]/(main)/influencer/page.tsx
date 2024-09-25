import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('인플루언서 찾기'),
  };
}

export default function InfluencerIndexPage() {
  return <div>인플루언서 찾기 페이지 (인플루언서 리스트 뜨고, 정렬)</div>;
}
