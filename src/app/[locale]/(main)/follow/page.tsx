import { Metadata } from 'next';

import { DOM_IDS } from '@/constants/domIdentifiers';

export const metadata: Metadata = {
  title: '팔로우',
};

export default function FollowPage() {
  return (
    <main id={DOM_IDS.CURRENT_SCROLL_PAGE} className="h-full w-full px-5">
      팔로우 페이지
    </main>
  );
}
