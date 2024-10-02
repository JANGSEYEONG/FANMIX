import UserAvatar from '@/components/domain/user/UserAvatar';

interface MyHistoryProfileProps {
  imageSrc: string;
  userNickName: string;
  email: string;
}
const MyHistoryProfile = ({ imageSrc, userNickName, email }: MyHistoryProfileProps) => {
  return (
    <div className="flex items-center gap-3.5">
      <UserAvatar size={54} imageSrc={imageSrc} userNickName={userNickName} />
      <div className="flex flex-col justify-center gap-0.5">
        <h2 className="body1-sb">{userNickName}</h2>
        <p className="text-neutral-500 body3-r">{email}</p>
      </div>
    </div>
  );
};

export default MyHistoryProfile;