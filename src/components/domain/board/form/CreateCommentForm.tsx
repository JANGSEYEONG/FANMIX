'use client';

import { cn } from '@/lib/utils';
import { VscSend } from 'react-icons/vsc';
import { useTranslations } from 'next-intl';

import { useAuthStore } from '@/stores/authStore';
import { UseFormRegisterReturn } from 'react-hook-form';

interface CreateCommentFormProps {
  onSubmit: () => void;
  useFormRegister: UseFormRegisterReturn;
  isValid: boolean;
}
const CreateCommentForm = ({ onSubmit, useFormRegister, isValid }: CreateCommentFormProps) => {
  const t = useTranslations('review_page');
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  if (!isLoggedIn)
    return (
      <p className="h-full text-orange-300 flex-center body3-r">
        {t('댓글 기능은 로그인 후 이용할 수 있어요')}
      </p>
    );
  return (
    <form onSubmit={onSubmit} className="gap-x-5 px-5 pt-2.5 flex-center">
      <input
        {...useFormRegister}
        className="h-[37px] flex-1 bg-orange-700/50 px-[15px] py-2 body3-r placeholder:text-orange-300 focus:border-none focus:outline-none focus:ring-0"
        placeholder={t('댓글을 입력해 주세요')}
        type="text"
        inputMode="text"
        enterKeyHint="send"
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

export default CreateCommentForm;
