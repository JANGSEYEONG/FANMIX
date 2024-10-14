'use client';

import MessageText from '@/components/common/MessageText';
import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';

import UserProfileHeader from './UserProfileHeader';
import UserIntroduce from './UserIntroduce';

import { useOtherUserProfile } from '../_hooks/useOtherUserProfile';

interface UserProfileProps {
  userId: number;
}
const UserProfile = ({ userId }: UserProfileProps) => {
  const { userData, isLoading, isError } = useOtherUserProfile(userId);

  if (isLoading) return <ComponentSpinner />;
  if (isError)
    return <MessageText message={'유저 정보를 불러오는데 실패했어요.\n다시 시도해 주세요.'} />;
  if (!userData) return <MessageText message={'유저 정보가 없어요.'} />;

  return (
    <>
      <UserProfileHeader {...userData} />
      <UserIntroduce {...userData} />
    </>
  );
};

export default UserProfile;
