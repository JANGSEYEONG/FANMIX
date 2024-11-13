'use client';

import { useReviewCommentForm } from '../_hooks/useReviewCommentForm';

import CreateCommentForm from '@/components/domain/board/form/CreateCommentForm';

interface ReviewCommentFormProps {
  influencerId: number;
  reviewId: number;
}
const ReviewCommentForm = ({ influencerId, reviewId }: ReviewCommentFormProps) => {
  const { register, handleSubmit, isValid, onSubmit, onError } = useReviewCommentForm(
    influencerId,
    reviewId,
  );

  return (
    <CreateCommentForm
      onSubmit={handleSubmit(onSubmit, onError)}
      useFormRegister={register('commentContent')}
      isValid={isValid}
    />
  );
};
export default ReviewCommentForm;
