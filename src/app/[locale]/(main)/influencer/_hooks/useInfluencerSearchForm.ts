import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

import {
  INFLUENCER_SEARCH_TYPES,
  INFLUENCER_SEARCH_SORT_TYPES,
  type InfluencerSearchSortType,
  type InfluencerSearchType,
} from '@/types/domain/influencerType';

const influencerSearchSchema = z.object({
  searchType: z.enum(
    Object.keys(INFLUENCER_SEARCH_TYPES) as [InfluencerSearchType, ...InfluencerSearchType[]],
  ),
  keyword: z.string(),
  sort: z.enum(
    Object.keys(INFLUENCER_SEARCH_SORT_TYPES) as [
      InfluencerSearchSortType,
      ...InfluencerSearchSortType[],
    ],
  ),
});

export type InfluencerSearchFormData = z.infer<typeof influencerSearchSchema>;

export const useInfluencerSearchForm = (
  initialSearchType: InfluencerSearchType,
  initialSortType: InfluencerSearchSortType,
  initialKeyword: string,
) => {
  const t = useTranslations('influencer_index_page');
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<InfluencerSearchFormData>({
    resolver: zodResolver(influencerSearchSchema),
    mode: 'onChange',
    defaultValues: {
      searchType: initialSearchType,
      sort: initialSortType,
      keyword: initialKeyword,
    },
  });

  const sortButtons = [
    { label: t('조회순'), value: INFLUENCER_SEARCH_SORT_TYPES.VIEW_COUNT },
    { label: t('평점순'), value: INFLUENCER_SEARCH_SORT_TYPES.RATING },
    { label: t('최신리뷰순'), value: INFLUENCER_SEARCH_SORT_TYPES.LATEST_REVIEW },
  ];

  return {
    register,
    handleSubmit,
    control,
    isValid,
    sortButtons,
  };
};
