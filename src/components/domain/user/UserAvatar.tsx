'use client';

import { cn } from '@/lib/utils';
import { LiaCameraSolid } from 'react-icons/lia';

import { useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import useUserAvatar from './hooks/useUserAvatarImage';

interface UserAvatarProps {
  size: number;
  userNickName: string;
  imageSrc: string;
  editable?: boolean;
}

// 유저 프로필 아바타
const UserAvatar = ({ size, userNickName, imageSrc, editable = false }: UserAvatarProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { handleClickAvatar, handleAvatarChange, previewImage } = useUserAvatar(fileInputRef);

  return (
    <div
      className={cn('relative', editable && 'cursor-pointer')}
      style={{ width: `${size}px`, height: `${size}px` }}
      onClick={editable ? handleClickAvatar : undefined}>
      <Avatar className="h-full w-full flex-shrink-0">
        <AvatarImage src={previewImage || imageSrc} alt="유저 프로필 사진" />
        <AvatarFallback className="bg-orange-300/40 h1-sb">{userNickName[0]}</AvatarFallback>
      </Avatar>
      {editable && (
        <>
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
        </>
      )}
    </div>
  );
};

export default UserAvatar;
