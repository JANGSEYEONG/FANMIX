import { VscSend } from 'react-icons/vsc';

import UserAvatar from '@/components/domain/user/UserAvatar';
import { useSendDirectMessage } from '../_hooks/useSendDirectMessage';

interface UserProfileHeaderProps {
  nickName: string;
  profileImgUrl: string;
}
const UserProfileHeader = ({ nickName, profileImgUrl }: UserProfileHeaderProps) => {
  const { handleClickSendDirectMessage } = useSendDirectMessage();

  return (
    <section
      aria-label={`${nickName}의 프로필`}
      className="sticky top-0 z-10 bg-black px-5 pb-4 pt-5">
      <div className="flex h-[66px] items-center justify-between gap-4 bg-neutral-800">
        <div className="flex items-center gap-3 px-2.5 py-[9px]">
          <UserAvatar size={48} profileImgUrl={profileImgUrl} userNickName={nickName} />
          <h2 className="h2-sb">{nickName}</h2>
        </div>
        <div
          className="group h-full w-10 cursor-pointer flex-center fanmix-gradient"
          onClick={handleClickSendDirectMessage}>
          <VscSend className="h-5 w-5 group-hover:scale-transition-105" />
        </div>
      </div>
    </section>
  );
};

export default UserProfileHeader;
