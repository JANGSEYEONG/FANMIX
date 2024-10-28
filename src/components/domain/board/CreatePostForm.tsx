'use client';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import ImageUploadField from './ImageUploadField';

import { useCreatePostForm } from './hooks/useCreatePostForm';
import type { PostFormData } from '@/types/domain/boardType';

interface CreatePostFormProps {
  defaultPostData: PostFormData;
}
const CreatePostForm = ({ defaultPostData }: CreatePostFormProps) => {
  const t = useTranslations('post_form');

  const { register, handleSubmit, setValue, isValid, onSubmit, onError } =
    useCreatePostForm(defaultPostData);

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex flex-1 flex-col justify-between gap-y-10">
      <div className="flex h-full flex-col px-5">
        <input
          {...register('title')}
          className="w-full flex-shrink-0 bg-transparent h2-m placeholder:text-neutral-500 focus:outline-none"
          placeholder={t('제목을 입력해 주세요')}
        />
        <Separator className="mb-5 mt-4 h-[1px] bg-neutral-500" />
        <textarea
          {...register('content')}
          className="mb-10 min-h-52 w-full flex-grow resize-none bg-transparent text-neutral-200 body2-r placeholder:text-neutral-500 focus:outline-none"
          placeholder={t('내용을 입력해 주세요')}
        />
      </div>
      <ImageUploadField setValue={setValue} />
      <Button
        type="submit"
        className={cn(
          'h-[82px] w-full flex-shrink-0 body2-m hover:bg-neutral-800',
          isValid ? 'fanmix-gradient hover:brightness-90' : 'cursor-not-allowed',
        )}>
        {t('등록하기')}
      </Button>
    </form>
  );
};
export default CreatePostForm;
