import DOM_IDS from '@/constants/domIdentifiers';

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
    <main id={DOM_IDS.CURRENT_SCROLL_PAGE} className="h-full w-full px-5">
      팔로우 페이지
    </main>
  );
}
