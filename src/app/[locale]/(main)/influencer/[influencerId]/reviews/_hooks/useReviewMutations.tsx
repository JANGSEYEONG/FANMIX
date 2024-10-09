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
import { formatDateToISO } from '@/lib/date'; // 임시로 import, 백엔드에서 데이터 돌려주면 이거 없앨거임

export const useReviewMutations = (
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
      // const responseData =
      await createReviewMutation.mutateAsync({ influencerId, reviewData });
      openModal(
        <MessageBox
          title={t('한줄리뷰가 등록되었어요')}
          buttons={[{ text: t('확인'), color: 'lime' }]}
        />,
      );

      setMyLatestReviewData({
        reviewId: 1, //이거 백엔드에서 돌려줘야함
        isBefore15Days: true, //마지막 리뷰 15일 전인지 후인지
        contentsRating: reviewData.contentsRating, // responseData 로 바꿔야함
        communicationRating: reviewData.communicationRating,
        trustRating: reviewData.trustRating,
        reviewDate: formatDateToISO(new Date()), // 이거 백엔드에서 돌려줘야함
        reviewContent: reviewData.content,
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
      // const responseData =
      await updateReviewMutation.mutateAsync({ influencerId, reviewId, reviewData });
      openModal(
        <MessageBox
          title={t('한줄리뷰가 수정되었어요')}
          buttons={[{ text: t('확인'), color: 'lime' }]}
        />,
      );

      setMyLatestReviewData({
        reviewId: 1, //이거 백엔드에서 돌려줘야함
        isBefore15Days: true, //마지막 리뷰 15일 전인지 후인지
        contentsRating: reviewData.contentsRating, // responseData 로 바꿔야함
        communicationRating: reviewData.communicationRating,
        trustRating: reviewData.trustRating,
        reviewDate: formatDateToISO(new Date()), // 이거 백엔드에서 돌려줘야함
        reviewContent: reviewData.content,
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
