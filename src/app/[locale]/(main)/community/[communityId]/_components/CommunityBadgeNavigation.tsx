import { cn } from '@/lib/utils';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import { useMemo } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { COMMUNITY_CATEGORY } from '@/constants/communityCategory';

interface CommunityBadgeNavigationProps {
  communityId: number;
}

const CommunityBadgeNavigation = ({ communityId }: CommunityBadgeNavigationProps) => {
  const t = useTranslations('community_category');
  // 선택된 커뮤니티를 첫 번째로 이동시킨 새로운 배열 생성
  const reorderedCategories = useMemo(() => {
    const selectedCategory = COMMUNITY_CATEGORY.find((category) => category.ID === communityId);
    if (!selectedCategory) return COMMUNITY_CATEGORY;

    return [
      selectedCategory,
      ...COMMUNITY_CATEGORY.filter((category) => category.ID !== communityId),
    ];
  }, [communityId]);
  return (
    <nav className="my-5">
      <ScrollArea>
        <ul className="flex items-center gap-x-2 px-5 body3-sb">
          {reorderedCategories.map(({ ID, NAME }) => (
            <li key={ID} className="body3-sb">
              <Link href={`/community/${ID}`}>
                <button
                  className={cn(
                    'whitespace-nowrap rounded-full border-[0.7px] px-3 py-1',
                    ID === communityId && 'bg-white text-black',
                  )}>
                  {t(NAME)}
                </button>
              </Link>
            </li>
          ))}
        </ul>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </nav>
  );
};

export default CommunityBadgeNavigation;
