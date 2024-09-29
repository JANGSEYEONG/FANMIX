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

export default function FanChannelIndexPage() {
  return <div className="w-full px-5 pt-[35px]">팬채널 리스트 페이지(인플루언서 검색)</div>;
}
