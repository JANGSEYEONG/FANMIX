import { Dispatch } from 'react';
import { useTranslations } from 'next-intl';

import { useModalStore } from '@/stores/modalStore';
import { useInformationToast } from '@/hooks/useInformationToast';
import {
  useCreateInfluencerReveiw,
  useDeleteInfluencerReveiw,
  useUpdateInfluencerReveiw,
} from '@/hooks/queries/useReviewService';

import MessageBox from '@/components/common/MessageBox';

import {
  REVIEW_MODE,
  type MyLatestReview,
  type ReviewFormData,
  type ReviewMode,
} from '@/types/domain/reviewType';

export const useMyReviewMutations = (
  setReviewMode: Dispatch<React.SetStateAction<ReviewMode>>,
  setMyLatestReviewData: Dispatch<React.SetStateAction<MyLatestReview | null>>,
) => {
  const t = useTranslations('review_form');

  const openModal = useModalStore((state) => state.openModal);
  const { showErrorToast } = useInformationToast();

  const createReviewMutation = useCreateInfluencerReveiw();
  const updateReviewMutation = useUpdateInfluencerReveiw();
  const deleteReviewMutation = useDeleteInfluencerReveiw();

  const handleCreateReview = async (influencerId: number, reviewData: ReviewFormData) => {
    try {
      const { data: responseData } = await createReviewMutation.mutateAsync({
        influencerId,
        reviewData,
      });
      openModal(
        <MessageBox
          title={t('한줄리뷰가 등록되었어요')}
          buttons={[{ text: t('확인'), color: 'lime' }]}
        />,
      );

      setMyLatestReviewData({
        reviewId: responseData?.reviewId,
        isBefore15Days: responseData?.isBefore15Days,
        contentsRating: responseData?.contentsRating,
        communicationRating: responseData?.communicationRating,
        trustRating: responseData?.trustRating,
        reviewDate: responseData?.reviewDate,
        reviewContent: responseData?.reviewContent,
      });

      setReviewMode(REVIEW_MODE.VIEW);
    } catch {
      showErrorToast(t('한줄리뷰 생성에 실패했어요'), t('다시 시도해 주세요'));
    }
  };

  const handleUpdateReview = async (
    influencerId: number,
    reviewId: number,
    reviewData: ReviewFormData,
  ) => {
    try {
      const { data: responseData } = await updateReviewMutation.mutateAsync({
        influencerId,
        reviewId,
        reviewData,
      });
      openModal(
        <MessageBox
          title={t('한줄리뷰가 수정되었어요')}
          buttons={[{ text: t('확인'), color: 'lime' }]}
        />,
      );

      setMyLatestReviewData({
        reviewId: responseData?.reviewId,
        isBefore15Days: responseData?.isBefore15Days,
        contentsRating: responseData?.contentsRating,
        communicationRating: responseData?.communicationRating,
        trustRating: responseData?.trustRating,
        reviewDate: responseData?.reviewDate,
        reviewContent: responseData?.reviewContent,
      });
      setReviewMode(REVIEW_MODE.VIEW);
    } catch {
      showErrorToast(t('한줄리뷰 수정에 실패했어요'), t('다시 시도해 주세요'));
    }
  };

  const handleDeleteReview = async (influencerId: number, reviewId: number) => {
    try {
      await deleteReviewMutation.mutateAsync({ influencerId, reviewId });
      openModal(
        <MessageBox
          title={t('한줄리뷰가 삭제되었어요')}
          buttons={[{ text: t('확인'), color: 'lime' }]}
        />,
      );

      // #20241010.syjang, 내 최신 리뷰 쿼리를 invalidateQueries 적용해도 MyReview가 리렌더링이 안됨..
      // 근데 새로고침하고 삭제하면 또 리렌더링 잘된다.. 우선 뷰 모드로 강제 전환..
      setMyLatestReviewData(null);
      setReviewMode(REVIEW_MODE.FORM_CREATE);
    } catch {
      showErrorToast(t('한줄리뷰 삭제에 실패했어요'), t('다시 시도해 주세요'));
    }
  };

  return {
    handleCreateReview,
    handleUpdateReview,
    handleDeleteReview,
    isPending:
      createReviewMutation.isPending ||
      updateReviewMutation.isPending ||
      deleteReviewMutation.isPending,
  };
};
