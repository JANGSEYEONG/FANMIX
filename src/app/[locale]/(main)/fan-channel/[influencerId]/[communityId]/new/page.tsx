import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import CheckFanChannelAccess from '@/components/domain/fanChannel/CheckFanChannelAccess';
import CreateFanChannelPostWrapper from './_components/CreateFanChannelPostWrapper';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('팬채널 글쓰기'),
  };
}

export default async function FanChannelNewPage({
  params: { influencerId, communityId },
}: {
  params: { influencerId: string; communityId: string };
}) {
  return (
    <CheckFanChannelAccess influencerId={parseInt(influencerId)}>
      <div className="h-full pt-[65px]">
        <CreateFanChannelPostWrapper
          influencerId={parseInt(influencerId)}
          communityId={parseInt(communityId)}
        />
      </div>
    </CheckFanChannelAccess>
  );
}
