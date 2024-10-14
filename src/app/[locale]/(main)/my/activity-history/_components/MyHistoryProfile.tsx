'use client';
import { useUserStore } from '@/stores/userStore';

import UserAvatar from '@/components/domain/user/UserAvatar';
import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';

const MyHistoryProfile = () => {
  const user = useUserStore((state) => state.user);
  if (!user) return <ComponentSpinner />;

  return (
    <div className="flex items-center gap-3.5">
      <UserAvatar size={54} profileImgUrl={user.profileImgUrl} userNickName={user.nickName} />
      <div className="flex flex-col justify-center gap-0.5">
        <h2 className="body1-sb">{user.nickName}</h2>
        <p className="text-neutral-500 body3-r">{user.email}</p>
      </div>
    </div>
  );
};

export default MyHistoryProfile;
