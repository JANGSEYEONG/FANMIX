'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { LiaCameraSolid } from 'react-icons/lia';
import { VscClose, VscEdit } from 'react-icons/vsc';

import { useUploadImage } from './hooks/useUploadImage';

import type { UseFormSetValue } from 'react-hook-form';
import type { PostFormData } from '@/types/domain/boardType';

interface ImageUploadFieldProps {
  setValue: UseFormSetValue<PostFormData>;
}
const ImageUploadField = ({ setValue }: ImageUploadFieldProps) => {
  const t = useTranslations('post_form');
  const {
    fileInputRef,
    previewImageUrl,
    handleImageUploadClick,
    handleImageChange,
    handleDeleteImage,
  } = useUploadImage(setValue);

  return (
    <div className="flex-shrink-0 px-5">
      {previewImageUrl ? (
        <div className="flex flex-col items-end gap-y-2.5">
          <div className="relative aspect-square w-full">
            <Image
              src={previewImageUrl}
              alt={'업로드 이미지'}
              fill
              className="rounded-[5px] object-cover"
            />
          </div>
          <div className="gap-x-2.5 flex-center">
            <button
              type="button"
              className="h-9 w-9 rounded-full bg-neutral-700 flex-center hover:scale-transition-105"
              onClick={handleImageUploadClick}>
              <VscEdit className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="h-9 w-9 rounded-full bg-neutral-800 flex-center hover:scale-transition-105"
              onClick={handleDeleteImage}>
              <VscClose className="h-6 w-6" />
            </button>
          </div>
        </div>
      ) : (
        <div
          className="h-[150px] w-[150px] flex-shrink-0 cursor-pointer border border-neutral-500 text-neutral-500 flex-col-center"
          onClick={handleImageUploadClick}>
          <LiaCameraSolid className="h-[30px] w-[30px]" />
          <span className="body3-sb">{t('사진 올리기')}</span>
        </div>
      )}
      <input
        type="file"
        accept="image/png,image/jpeg,image/jpg"
        ref={fileInputRef}
        onChange={handleImageChange}
        className="hidden"
      />
    </div>
  );
};

export default ImageUploadField;
