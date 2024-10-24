'use client';

import UserProfileHeader from './UserProfileHeader';
import UserIntroduce from './UserIntroduce';

import MessageText from '@/components/common/MessageText';

import { useUserDetail } from '@/hooks/queries/useUserService';

interface UserProfileProps {
  userId: number;
}
const UserProfile = ({ userId }: UserProfileProps) => {
  const { data: userData } = useUserDetail({ userId });

  if (!userData?.data) return <MessageText message={'유저 정보가 없어요.'} />;

  return (
    <>
      <UserProfileHeader {...userData.data} />
      <UserIntroduce {...userData.data} />
    </>
  );
};

export default UserProfile;
