import { Metadata, Viewport } from 'next';
import { getTranslations } from 'next-intl/server';

import { Separator } from '@/components/ui/separator';

import CommunityIconNavigation from './_components/CommunityIconNavigation';
import AllCommunitiesPostList from './_components/AllCommunitiesPostList';

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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#171717',
};

export default function CommunityIndexPage() {
  return (
    <div className="pt-[35px]">
      <CommunityIconNavigation />
      <Separator className="h-2 bg-neutral-800" />
      <AllCommunitiesPostList />
    </div>
  );
}
