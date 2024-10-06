'use client';

import InfluencerSearchForm from './InfluencerSearchForm';
import InfluencerSearchResult from './InfluencerSearchResult';

import { useValidatedInfluencerSearch } from '../_hooks/useValidatedInfluencerSearch';

const InfluencerSearchWrapper = () => {
  const { onSubmit, onError, searchResult, isLoading, isError } = useValidatedInfluencerSearch();
  return (
    <div className="flex h-full flex-col">
      <section aria-label="검색 조건" className="mb-[15px] flex-shrink-0">
        <InfluencerSearchForm {...{ onSubmit, onError }} />
      </section>
      <section aria-label="인플루언서 검색 결과" className="flex-1">
        <InfluencerSearchResult {...{ searchResult, isLoading, isError }} />
      </section>
    </div>
  );
};

export default InfluencerSearchWrapper;
