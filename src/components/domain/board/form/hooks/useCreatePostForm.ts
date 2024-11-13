import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useInformationToast } from '@/hooks/useInformationToast';

import { postFormSchema, type PostFormData } from '@/types/domain/boardType';

export const useCreatePostForm = (defaultPostData: PostFormData) => {
  const t = useTranslations('post_form');
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isValid },
  } = useForm<PostFormData>({
    resolver: zodResolver(postFormSchema),
    defaultValues: defaultPostData,
    mode: 'onChange',
  });

  const { showErrorToast } = useInformationToast();

  const onSubmit = async (postData: PostFormData) => {
    console.log(postData);
  };
  const onError = () => {
    showErrorToast(
      t('카테고리와 제목 및 내용을 입력해 주세요'),
      t('카테고리 제목 내용을 입력해야 게시글을 등록할 수 있어요'),
    );
  };

  // 커뮤니티 페이지처럼 communityId가 유동적인 경우, 값의 변화를 감지하고 setValue
  useEffect(() => {
    setValue('communityId', defaultPostData.communityId, {
      shouldValidate: true, // 값 설정 후 validation 실행
      shouldDirty: true, // form의 dirty 상태 업데이트
    });
  }, [setValue, defaultPostData.communityId]);

  return {
    register,
    handleSubmit,
    setValue,
    isValid,
    onSubmit,
    onError,
  };
};
