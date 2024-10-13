import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import AllFanChannelsWrapper from './_components/AllFanChannelsWrapper';

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
  return (
    <div className="h-full w-full px-5 pb-20 pt-[65px]">
      <AllFanChannelsWrapper />
    </div>
  );
}
