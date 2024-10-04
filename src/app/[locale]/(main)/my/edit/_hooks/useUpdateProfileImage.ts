'use client';

import { ChangeEvent, RefObject } from 'react';
import { useUpdateMyProfileImage } from '@/hooks/queries/useUserService';

export const useUpdateProfileImage = (fileInputRef: RefObject<HTMLInputElement>) => {
  const { mutate: updateProfileImage, isPending } = useUpdateMyProfileImage();

  const handleClickAvatar = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // 서버로 이미지 업로드
      updateProfileImage({ file });
    }
  };

  return {
    handleClickAvatar,
    handleAvatarChange,
    isUpdating: isPending, // 업로드 중 상태
  };
};
