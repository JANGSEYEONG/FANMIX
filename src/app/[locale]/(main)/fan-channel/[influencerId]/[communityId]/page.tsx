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

export default function FanChannelPage({
  params: { influencerId, communityId },
}: {
  params: { influencerId: string; communityId: string };
}) {
  return (
    <div className="pb-20 pt-[35px]">
      <span>
        {`인플루언서 ${influencerId}의 팬채널인 ${communityId}번 커뮤니티의 글 목록 페이지`}
      </span>
      <span>{`인플루언서 ${influencerId}를 팔로우중인지 확인 후에 페이지 이동시키기`}</span>
    </div>
  );
}
