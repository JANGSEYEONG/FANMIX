import {
  INFLUENCER_SEARCH_SORT_TYPES,
  INFLUENCER_SEARCH_TYPES,
  InfluencerSearchSortType,
  InfluencerSearchType,
} from '@/types/domain/influencerType';

function isInfluencerSearchType(value: string): value is InfluencerSearchType {
  return Object.values(INFLUENCER_SEARCH_TYPES).includes(value as InfluencerSearchType);
}
function isInfluencerSortType(value: string): value is InfluencerSearchSortType {
  return Object.values(INFLUENCER_SEARCH_SORT_TYPES).includes(value as InfluencerSearchSortType);
}

export const useNormalizedSearchConditions = (
  defaultSearchType?: string,
  defaultSortType?: string,
  defaultKeyword?: string,
) => {
  // useForm과 useQuery에 동시 전달을 위해 여기서 타입체크 후, 검색어 조건 초기화
  let initialSearchType: InfluencerSearchType = INFLUENCER_SEARCH_TYPES.INFLUENCER_NAME;
  let initialSortType: InfluencerSearchSortType = INFLUENCER_SEARCH_SORT_TYPES.VIEW_COUNT;
  let initialKeyword: string = '';

  if (defaultSearchType && isInfluencerSearchType(defaultSearchType)) {
    initialSearchType = defaultSearchType;
  }
  if (defaultSortType && isInfluencerSortType(defaultSortType)) {
    initialSortType = defaultSortType;
  }
  if (defaultKeyword) {
    initialKeyword = defaultKeyword;
  }

  return {
    initialSearchType,
    initialSortType,
    initialKeyword,
  };
};
