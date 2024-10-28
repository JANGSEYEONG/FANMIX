import { cn } from '@/lib/utils';
import { useMemo, useRef } from 'react';
import { useTranslations } from 'next-intl';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { COMMUNITY_CATEGORY } from '@/constants/communityCategory';

interface CommunityBadgeListProps {
  selectedCommunityId: number;
  handleSelectCommunity: (selectCommunityId: number) => void;
}
const CommunityBadgeList = ({
  selectedCommunityId,
  handleSelectCommunity,
}: CommunityBadgeListProps) => {
  const t = useTranslations('community_category');
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // 선택된 커뮤니티를 첫 번째로 이동시킨 새로운 배열 생성
  const reorderedCategories = useMemo(() => {
    const selectedCategory = COMMUNITY_CATEGORY.find(
      (category) => category.ID === selectedCommunityId,
    );
    if (!selectedCategory) return COMMUNITY_CATEGORY;

    return [
      selectedCategory,
      ...COMMUNITY_CATEGORY.filter((category) => category.ID !== selectedCommunityId),
    ];
  }, [selectedCommunityId]);

  const handleClickCategory = (selectedCommunityId: number) => {
    handleSelectCommunity(selectedCommunityId);

    scrollAreaRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
  };
  return (
    <ScrollArea ref={scrollAreaRef} className="flex-shrink-0">
      <ul className="flex items-center gap-x-2 px-5 body3-sb">
        {reorderedCategories.map(({ ID, NAME }) => (
          <li key={ID} className="body3-sb">
            <button
              onClick={() => handleClickCategory(ID)}
              className={cn(
                'whitespace-nowrap rounded-full border-[0.7px] px-3 py-1',
                ID === selectedCommunityId && 'bg-white text-black',
              )}>
              {t(NAME)}
            </button>
          </li>
        ))}
      </ul>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default CommunityBadgeList;
