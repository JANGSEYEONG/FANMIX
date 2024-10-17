'use client';

import InfluencerSearchForm from './InfluencerSearchForm';
import InfluencerSearchResult from './InfluencerSearchResult';

import { useValidatedInfluencerSearch } from '../_hooks/useValidatedInfluencerSearch';
import { useNormalizedSearchConditions } from '../_hooks/useNormalizedSearchConditions';

interface InfluencerSearchWrapperProps {
  defaultSearchType?: string;
  defaultSortType?: string;
  defaultKeyword?: string;
}

const InfluencerSearchWrapper = ({
  defaultSearchType,
  defaultSortType,
  defaultKeyword,
}: InfluencerSearchWrapperProps) => {
  const { initialSearchType, initialSortType, initialKeyword } = useNormalizedSearchConditions(
    defaultSearchType,
    defaultSortType,
    defaultKeyword,
  );
  const { onSubmit, onError, searchResult, isLoading, isError } = useValidatedInfluencerSearch(
    initialSearchType,
    initialSortType,
    initialKeyword,
  );
  return (
    <div className="flex h-full flex-col">
      <section aria-label="검색 조건" className="mb-[15px] flex-shrink-0">
        <InfluencerSearchForm
          {...{ onSubmit, onError, initialSearchType, initialSortType, initialKeyword }}
        />
      </section>
      <section aria-label="인플루언서 검색 결과" className="flex-1">
        <InfluencerSearchResult
          {...{
            searchResult,
            isLoading,
            isError,
          }}
        />
      </section>
    </div>
  );
};

export default InfluencerSearchWrapper;
