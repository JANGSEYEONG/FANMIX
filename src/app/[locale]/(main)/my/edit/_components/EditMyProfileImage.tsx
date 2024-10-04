'use client';

import { useRef } from 'react';

import { LiaCameraSolid } from 'react-icons/lia';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { useUserStore } from '@/stores/userStore';
import { useUpdateProfileImage } from '../_hooks/useUpdateProfileImage';

import PageSpinner from '@/components/common/spinner/PageSpinner';
import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';

const EditMyProfileImage = () => {
  const user = useUserStore((state) => state.user);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { handleClickAvatar, handleAvatarChange, isUpdating } = useUpdateProfileImage(fileInputRef);

  if (!user) {
    return <ComponentSpinner />;
  }
  return (
    <>
      <div className="gap-[18px] flex-col-center">
        <div className="relative h-[82px] w-[82px] cursor-pointer" onClick={handleClickAvatar}>
          <Avatar className="h-full w-full flex-shrink-0">
            <AvatarImage src={user.profileImgUrl} alt="내 프로필 사진" />
            <AvatarFallback className="bg-orange-300/40 h1-sb">{user.nickName[0]}</AvatarFallback>
          </Avatar>
          <div className="absolute bottom-0 right-0 h-[26px] w-[26px] rounded-full bg-orange-600 flex-center">
            <LiaCameraSolid className="h-5 w-5 text-white" />
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleAvatarChange}
            className="hidden"
            accept="image/png,image/jpeg,image/jpg"
          />
        </div>
        <div className="flex gap-1 text-center flex-col-center">
          <h2 className="h2-sb">{user.nickName}</h2>
          <p className="text-neutral-400 body2-r">{user.email}</p>
        </div>
      </div>
      {isUpdating && <PageSpinner />}
    </>
  );
};
export default EditMyProfileImage;
