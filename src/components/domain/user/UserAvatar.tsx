'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface UserAvatarProps {
  size: number;
  profileImgUrl: string;
  userNickName: string;
}

// 유저 프로필 아바타
const UserAvatar = ({ size, userNickName, profileImgUrl }: UserAvatarProps) => {
  return (
    <div className="relative flex-shrink-0" style={{ width: `${size}px`, height: `${size}px` }}>
      <Avatar className="h-full w-full flex-shrink-0">
        <AvatarImage src={profileImgUrl} alt="유저 프로필 사진" />
        <AvatarFallback className="bg-orange-300/40 h1-sb">{userNickName[0]}</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default UserAvatar;
