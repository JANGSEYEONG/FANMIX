import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import { SheetClose } from '@/components/ui/sheet';

import MessageText from '@/components/common/MessageText';
import BoardTypeLabel from '@/components/domain/board/BoardTypeLabel';

import { BOARD_TYPE } from '@/types/domain/boardType';
import { useSearchInfluencersByName } from '@/hooks/queries/useInfluencerService';

interface InfluencerMainSearchResultProps {
  searchTerm: string;
  isCategoryResultEmpty: boolean;
}
const InfluencerMainSearchResult = ({
  searchTerm,
  isCategoryResultEmpty,
}: InfluencerMainSearchResultProps) => {
  const t = useTranslations('main_search');
  const { data: influencers } = useSearchInfluencersByName(searchTerm);

  if (!influencers?.data || (influencers.data.length === 0 && isCategoryResultEmpty)) {
    return (
      <MessageText message={t('인플루언서 및 커뮤니티 검색 결과가 없어요')} className="mt-20" />
    );
  }
  if (influencers.data.length === 0) {
    return null;
  }
  return (
    <ul className="flex flex-col justify-center gap-y-6 h2-m">
      {influencers.data.map(({ influencerId, influencerName }) => (
        <li key={influencerId} className="cursor-pointer">
          <SheetClose className="w-full">
            <Link href={`/influencer/${influencerId}`}>
              <BoardTypeLabel
                boardType={BOARD_TYPE.FAN}
                boardName={influencerName}
                iconSize={22}
                className="gap-x-2.5 text-white"
              />
            </Link>
          </SheetClose>
        </li>
      ))}
    </ul>
  );
};

export default InfluencerMainSearchResult;
