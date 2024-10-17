'use client';
import { useTranslations } from 'next-intl';
import { useInformationToast } from '@/hooks/useInformationToast';
import { useSearchInfluencers } from '@/hooks/queries/useInfluencerService';

import {
  INFLUENCER_SEARCH_TYPES,
  InfluencerSearchSortType,
  type InfluencerSearchType,
} from '@/types/domain/influencerType';
import type { InfluencerSearchFormData } from './useInfluencerSearchForm';

export const useValidatedInfluencerSearch = (
  initialSearchType: InfluencerSearchType,
  initialSortType: InfluencerSearchSortType,
  initialKeyword: string,
) => {
  const t = useTranslations('influencer_index_page');
  const { showErrorToast } = useInformationToast();
  const { search, data, isLoading, isError } = useSearchInfluencers({
    searchType: initialSearchType,
    sort: initialSortType,
    keyword: initialKeyword,
  });

  const onSubmit = (data: InfluencerSearchFormData) => {
    if (data.searchType === INFLUENCER_SEARCH_TYPES.TAG && data.keyword.length < 2) {
      showErrorToast(t('태그는 최소 2글자 이상 입력해주세요'));
      return;
    }
    search(data);
  };

  const onError = () => {
    showErrorToast(t('검색어를 입력해 주세요'), t('검색어를 입력 후 다시 시도해 주세요'));
  };

  return { onSubmit, onError, searchResult: data, isLoading, isError };
};
