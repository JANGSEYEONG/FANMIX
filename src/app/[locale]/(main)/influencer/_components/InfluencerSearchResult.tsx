'use client';

import { useTranslations } from 'next-intl';

import SearchInfluencerCard from './SearchInfluencerCard';
import MessageText from '@/components/common/MessageText';
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
    return <ComponentSpinner className="h-full pb-24 flex-center" />;
  }
  if (isError) {
    return (
      <MessageText
        className="h-full pb-24"
        message={t('인플루언서 검색 중 오류가 발생했어요 다시 시도해 주세요')}
      />
    );
  }
  if (!searchResult || searchResult.data.length === 0) {
    return <MessageText className="h-full pb-24" message={t('인플루언서 검색 결과가 없어요')} />;
  }
  return (
    <ul className="mb-20 flex flex-col justify-center gap-y-[22px]">
      {searchResult.data.map((result) => (
        <li key={result.influencerId}>
          <SearchInfluencerCard {...result} />
        </li>
      ))}
    </ul>
  );
};
export default InfluencerSearchResult;
