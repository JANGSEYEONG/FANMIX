import { Metadata } from 'next';

import { getTranslations } from 'next-intl/server';

import FanChannelHeader from './_components/FanChannelHeader';
import FanChannelPostList from './_components/FanChannelPostList';
import CheckFanChannelAccess from '@/components/domain/fanChannel/CheckFanChannelAccess';

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

export default async function FanChannelPage({
  params: { influencerId, communityId },
}: {
  params: { influencerId: string; communityId: string };
}) {
  return (
    <CheckFanChannelAccess influencerId={parseInt(influencerId)} className="pb-20">
      <div className="h-full pb-20 pt-[35px]">
        <div>
          <FanChannelHeader
            influencerId={parseInt(influencerId)}
            communityId={parseInt(communityId)}
          />
          <FanChannelPostList />
        </div>
      </div>
    </CheckFanChannelAccess>
  );
}
