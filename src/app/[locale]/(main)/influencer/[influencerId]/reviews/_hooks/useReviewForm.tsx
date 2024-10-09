'use client';

import { Dispatch } from 'react';
import { useTranslations } from 'next-intl';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useModalStore } from '@/stores/modalStore';
import { useReviewMutations } from './useReviewMutations';
import { useInformationToast } from '@/hooks/useInformationToast';

import ScoreSelectBox from '../_components/ScoreSelectBox';

import {
  REVIEW_MODE,
  reviewFormSchema,
  type ReviewMode,
  type ReviewFormData,
  type MyLatestReview,
} from '@/types/domain/reviewType';

type MetricKey = keyof Omit<ReviewFormData, 'content'>;

export const useReviewForm = (
  influencerId: number,
  setReviewMode: Dispatch<React.SetStateAction<ReviewMode>>,
  setMyLatestReviewData: Dispatch<React.SetStateAction<MyLatestReview | null>>,
  reviewMode: ReviewMode,
  defaultReviewData: MyLatestReview | null,
) => {
  const t = useTranslations('review_form');
  const { openModal, closeModal } = useModalStore();
  const { showErrorToast } = useInformationToast();

  const { handleCreateReview, handleUpdateReview, isPending } = useReviewMutations(
    setReviewMode,
    setMyLatestReviewData,
  );
  const defaultReviewFormValues = {
    content: defaultReviewData?.reviewContent || '',
    contentsRating: defaultReviewData?.contentsRating || 0,
    communicationRating: defaultReviewData?.communicationRating || 0,
    trustRating: defaultReviewData?.trustRating || 0,
  };
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isValid },
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewFormSchema),
    defaultValues: defaultReviewFormValues,
    mode: 'onChange',
  });

  const contentsRating = watch('contentsRating');
  const communicationRating = watch('communicationRating');
  const trustRating = watch('trustRating');

  const onSubmit = async (reviewData: ReviewFormData) => {
    if (reviewMode === REVIEW_MODE.FORM_CREATE) {
      await handleCreateReview(influencerId, reviewData);
    } else if (reviewMode === REVIEW_MODE.FORM_EDIT && defaultReviewData) {
      await handleUpdateReview(influencerId, defaultReviewData.reviewId, reviewData);
    }
  };

  const onError = () => {
    showErrorToast(
      t('리뷰를 완성해 주세요'),
      t('내용과 모든 항목의 점수를 입력해야 한줄 리뷰를 등록할 수 있습니다'),
    );
  };

  const handleSelectMetricScore = (metricKey: MetricKey, selectScore: number) => {
    setValue(metricKey, selectScore, { shouldValidate: true });
    closeModal();
  };

  const handleClickMetric = (title: string, metricKey: MetricKey, metricScore: number) => {
    openModal(
      <ScoreSelectBox
        title={title}
        defaultScore={metricScore}
        handleSelectScore={(selectScore) => handleSelectMetricScore(metricKey, selectScore)}
      />,
    );
  };

  const metricList: Array<{ key: MetricKey; label: string; score: number }> = [
    { key: 'contentsRating', label: t('콘텐츠'), score: contentsRating },
    { key: 'communicationRating', label: t('소통'), score: communicationRating },
    { key: 'trustRating', label: t('신뢰'), score: trustRating },
  ];

  return {
    register,
    handleSubmit,
    onSubmit,
    onError,
    isValid,
    handleClickMetric,
    metricList,
    isPending,
  };
};
