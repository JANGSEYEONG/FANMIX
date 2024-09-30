'use client';

import { Dispatch } from 'react';
import { useTranslations } from 'next-intl';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useModalStore } from '@/stores/modalStore';

import MessageBox from '@/components/common/MessageBox';
import ScoreSelectBox from '../_components/ScoreSelectBox';

import { REVIEW_MODE, type ReviewMode } from '@/types/domain/influencerType';
import useInformationToast from '@/hooks/useInformationToast';

const reviewSchema = z.object({
  reviewContent: z.string().min(1),
  contentsRating: z.number().min(1).max(10),
  communicationRating: z.number().min(1).max(10),
  trustRating: z.number().min(1).max(10),
});

type ReviewFormData = z.infer<typeof reviewSchema>;
type MetricKey = keyof Omit<ReviewFormData, 'reviewContent'>;

const useReviewForm = (
  setReviewMode: Dispatch<React.SetStateAction<ReviewMode>>,
  isModify: boolean,
  defaultReviewData?: ReviewFormData,
) => {
  const t = useTranslations('review_form');
  const { openModal, closeModal } = useModalStore();
  const { showErrorToast } = useInformationToast();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isValid },
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: defaultReviewData || {
      reviewContent: '',
      contentsRating: 0,
      communicationRating: 0,
      trustRating: 0,
    },
    mode: 'onChange',
  });

  const contentsRating = watch('contentsRating');
  const communicationRating = watch('communicationRating');
  const trustRating = watch('trustRating');

  const onSubmit = (data: ReviewFormData) => {
    console.log(data);
    // TODO: 제출 로직 추가
    // submit할 때 리액트쿼리 캐시데이터 수정하기
    openSuccessMessage();
    setReviewMode(REVIEW_MODE.VIEW);
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

  const openSuccessMessage = () => {
    openModal(
      <MessageBox
        title={isModify ? t('한줄리뷰가 수정되었어요') : t('한줄리뷰가 등록되었어요')}
        buttons={[{ text: t('확인'), color: 'lime' }]}
      />,
    );
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    onError,
    isValid,
    handleClickMetric,
    metricList,
  };
};

export default useReviewForm;
