import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import InfluencerSearchWrapper from './_components/InfluencerSearchWrapper';

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
  return (
    <div className="h-full px-5 pb-20 pt-[65px]">
      <InfluencerSearchWrapper />
    </div>
  );
}
