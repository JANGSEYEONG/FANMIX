'use client';

import { RefObject, useState } from 'react';

export const useUserAvatarImage = (fileInputRef: RefObject<HTMLInputElement>) => {
  // TO DO: 서버에 이미지 업로드 로직 구현, isLoading 상태값 추가, previewImage 없애고 imageSrc 상태 변경하기
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleClickAvatar = () => {
    fileInputRef.current?.click();
  };
  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // 로직 구현 전까지 이미지 미리보기 생성
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);

      console.log('File selected:', file.name);
    }
  };

  return { handleClickAvatar, handleAvatarChange, previewImage };
};
