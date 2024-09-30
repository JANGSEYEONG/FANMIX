'use client';

import { z } from 'zod';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useTranslations } from 'next-intl';
import useInformationToast from '@/hooks/useInformationToast';

const commentSchema = z.object({
  commentContent: z.string().min(1),
});

type CommentFormData = z.infer<typeof commentSchema>;

const useCommentForm = () => {
  const t = useTranslations('review_page');
  const { showErrorToast } = useInformationToast();

  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: CommentFormData) => {
    console.log(data);
    // 여기에 실제 제출 로직을 구현할 수 있습니다.
    // 예: API 호출 등
    reset();
  };

  const onError = () => {
    showErrorToast(t('댓글을 작성해 주세요'), t('댓글 내용을 입력한 후 등록해 주세요'));
  };

  return {
    register,
    handleSubmit,
    isValid,
    onSubmit,
    onError,
  };
};

export default useCommentForm;
