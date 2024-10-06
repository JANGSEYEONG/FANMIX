import { Link } from '@/i18n/routing';

import { SheetClose } from '@/components/ui/sheet';

import BoardTypeLabel from '@/components/domain/board/BoardTypeLabel';
import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';

import { BOARD_TYPE } from '@/types/domain/boardType';
import type { SearchInfluencersByNameResponse } from '@/types/service/influencerServiceType';
import { useTranslations } from 'next-intl';

interface InfluencerMainSearchResultProps {
  influencers: SearchInfluencersByNameResponse | undefined;
  isLoading: boolean;
  isError: boolean;
}
const InfluencerMainSearchResult = ({
  influencers,
  isLoading,
  isError,
}: InfluencerMainSearchResultProps) => {
  const t = useTranslations('influencer_index_page');
  if (isLoading) {
    return (
      <div className="h-full flex-center">
        <ComponentSpinner />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="h-full whitespace-pre-wrap text-center text-neutral-500 flex-center body3-r">
        {t('인플루언서 검색 중 오류가 발생했어요 다시 시도해 주세요')}
      </div>
    );
  }
  if (!influencers || influencers.data.length === 0) {
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
