import { Metadata } from 'next';

import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('팔로우'),
  };
}

export default function FollowPage() {
  return (
    <div className="w-full px-5 pb-20 pt-[35px]">
      팔로우 페이지, 클릭 시 팬채널/인플루언서페이지/커뮤니티로 이동
    </div>
  );
}
