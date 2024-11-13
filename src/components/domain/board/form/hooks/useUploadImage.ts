import { useRef, useState } from 'react';

import type { PostFormData } from '@/types/domain/boardType';
import type { UseFormSetValue } from 'react-hook-form';

export const useUploadImage = (setValue: UseFormSetValue<PostFormData>) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);

  // fileInput에 파일 업로드
  const handleImageUploadClick = () => {
    fileInputRef.current?.click();
  };

  // fileInput onChange 이벤트
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // setValue로 file 값을 직접 설정
      setValue('image', file, {
        shouldValidate: true, // 값 설정 후 validation 실행
        shouldDirty: true, // form의 dirty 상태 업데이트
      });

      // 파일 업로드 전 미리보기 이미지 구현
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // fileInput의 이미지 삭제
  const handleDeleteImage = () => {
    setPreviewImageUrl(null);
    setValue('image', undefined, {
      shouldValidate: true,
      shouldDirty: true,
    });
    // input의 value를 리셋
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return {
    fileInputRef,
    previewImageUrl,
    handleImageUploadClick,
    handleImageChange,
    handleDeleteImage,
  };
};
