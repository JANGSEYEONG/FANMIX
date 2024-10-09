'use client';

import { useTranslations } from 'next-intl';

import SearchInfluencerCard from './SearchInfluencerCard';
import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';
import type { SearchInfluencersResponse } from '@/types/service/influencerServiceType';

interface InfluencerSearchResultProps {
  searchResult: SearchInfluencersResponse | undefined;
  isLoading: boolean;
  isError: boolean;
}
const InfluencerSearchResult = ({
  searchResult,
  isLoading,
  isError,
}: InfluencerSearchResultProps) => {
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
      <p className="h-full whitespace-pre-wrap text-center text-neutral-500 flex-center body3-r">
        {t('인플루언서 검색 중 오류가 발생했어요 다시 시도해 주세요')}
      </p>
    );
  }
  if (!searchResult || searchResult.data.length === 0) {
    return (
      <p className="h-full whitespace-pre-wrap text-center text-neutral-500 flex-center body3-r">
        {t('인플루언서 검색 결과가 없어요')}
      </p>
    );
  }
  return (
    <ul className="flex flex-col justify-center gap-y-[22px]">
      {searchResult.data.map((result) => (
        <li key={result.influencerId}>
          <SearchInfluencerCard {...result} />
        </li>
      ))}
    </ul>
  );
};
export default InfluencerSearchResult;
