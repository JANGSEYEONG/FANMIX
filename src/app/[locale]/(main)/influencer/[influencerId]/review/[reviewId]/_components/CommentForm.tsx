'use client';

import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { VscSend } from 'react-icons/vsc';

import useCommentForm from '../_hooks/useCommentForm';

const CommentForm = () => {
  const t = useTranslations('review_page');
  const { register, handleSubmit, isValid, onSubmit, onError } = useCommentForm();

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="gap-x-5 px-5 pt-2.5 flex-center">
      <input
        {...register('commentContent')}
        className="h-[37px] flex-1 bg-orange-700/50 px-[15px] py-2 body3-r placeholder:text-orange-300 focus:border-none focus:outline-none focus:ring-0"
        placeholder={t('댓글을 입력해주세요')}
      />
      <button type="submit" className="flex-shrink-0 flex-center">
        <VscSend
          className={cn(
            'h-5 w-5',
            isValid ? 'hover:scale-transition-105' : 'cursor-not-allowed opacity-50',
          )}
        />
      </button>
    </form>
  );
};
export default CommentForm;
