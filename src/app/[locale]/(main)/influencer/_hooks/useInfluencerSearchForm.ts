import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

import { useInformationToast } from '@/hooks/useInformationToast';

const SEARCH_TYPE = {
  INFLUENCER_NAME: 'INFLUENCER_NAME',
  TAG: 'TAG',
} as const;

const SEARCH_SORT = {
  VIEW_COUNT: 'VIEW_COUNT',
  RATING: 'RATING',
  LATEST_REVEIEW: 'LATEST_REVEIEW',
} as const;

type SearchType = keyof typeof SEARCH_TYPE;
type SearchSort = keyof typeof SEARCH_SORT;

const influencerSearchSchema = z.object({
  searchType: z.enum(Object.keys(SEARCH_TYPE) as [SearchType, ...SearchType[]]),
  keyword: z.string().min(1),
  sort: z.enum(Object.keys(SEARCH_SORT) as [SearchSort, ...SearchSort[]]),
});

type InfluencerSearchFormData = z.infer<typeof influencerSearchSchema>;

export const useInfluencerSearchForm = () => {
  const t = useTranslations('influencer_index_page');
  const { showErrorToast } = useInformationToast();

  const {
    register,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<InfluencerSearchFormData>({
    resolver: zodResolver(influencerSearchSchema),
    mode: 'onChange',
    defaultValues: {
      searchType: 'INFLUENCER_NAME',
      sort: 'VIEW_COUNT',
    },
  });

  const onSubmit = (data: InfluencerSearchFormData) => {
    console.log(data);
    // 여기에 폼 제출 로직을 추가하세요
  };

  const onError = () => {
    showErrorToast(t('검색어를 입력해 주세요'), t('검색어를 입력 후 다시 시도해 주세요'));
  };

  const sortButtons = [
    { label: t('조회순'), value: SEARCH_SORT.VIEW_COUNT },
    { label: t('평점순'), value: SEARCH_SORT.RATING },
    { label: t('최신리뷰순'), value: SEARCH_SORT.LATEST_REVEIEW },
  ];

  return {
    register,
    handleSubmit,
    control,
    isValid,
    onSubmit,
    onError,
    sortButtons,
  };
};
