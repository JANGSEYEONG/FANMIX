import { useTranslations } from 'next-intl';

import { useModalStore } from '@/stores/modalStore';
import { useInformationToast } from '@/hooks/useInformationToast';
import {
  useCreateInfluencerReviewComment,
  useDeleteInfluencerReviewComment,
} from '@/hooks/queries/useReviewService';

import MessageBox from '@/components/common/MessageBox';

export const useMyCommentMutations = () => {
  const t = useTranslations('review_page');

  const openModal = useModalStore((state) => state.openModal);
  const { showConfirmToast, showErrorToast } = useInformationToast();

  const createCommentMutation = useCreateInfluencerReviewComment();
  const deleteCommentMutation = useDeleteInfluencerReviewComment();

  // 리뷰 댓글 생성
  const handleCreateComment = async (
    influencerId: number,
    reviewId: number,
    commentContent: string,
  ) => {
    try {
      await createCommentMutation.mutateAsync({
        influencerId,
        reviewId,
        content: commentContent,
      });
    } catch {
      showErrorToast(t('댓글 작성에 실패했어요'), t('다시 시도해 주세요'));
    }
  };

  // 리뷰 댓글 삭제
  const handleDeleteComment = async (influencerId: number, reviewId: number, commentId: number) => {
    openModal(
      <MessageBox
        title={t('정말 삭제하시겠어요?')}
        description={t('삭제한 한줄리뷰는 다시 복구할 수 없어요')}
        buttons={[
          {
            text: t('삭제'),
            color: 'orange',
            onClick: async () => {
              try {
                await deleteCommentMutation.mutateAsync({
                  influencerId,
                  reviewId,
                  commentId,
                });
                showConfirmToast(t('댓글이 정상적으로 삭제되었어요'));
              } catch {
                showErrorToast(t('댓글 삭제에 실패했어요'), t('다시 시도해 주세요'));
              }
            },
          },
          { text: t('취소'), color: 'gray' },
        ]}
      />,
    );
  };
  return {
    handleCreateComment,
    handleDeleteComment,
  };
};
