import { Link } from '@/i18n/routing';
import { VscChevronRight } from 'react-icons/vsc';

import UserAvatar from '@/components/domain/user/UserAvatar';

interface MyProfileProps {
  imageSrc: string;
  userNickName: string;
  email: string;
  introduction: string;
}

const MyProfile = ({ imageSrc, userNickName, email, introduction }: MyProfileProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Link
        href="/my/edit"
        className="flex h-[100px] items-center justify-between py-3 pl-4 pr-2.5 fanmix-gradient">
        <div className="gap-3.5 flex-center">
          <UserAvatar size={76} imageSrc={imageSrc} userNickName={userNickName} />
          <div className="flex flex-col justify-center">
            <h2 className="h2-sb">{userNickName}</h2>
            <p className="text-orange-200 body3-r">{email}</p>
          </div>
        </div>
        <VscChevronRight className="h-5 w-5 hover:scale-transition-105" />
      </Link>
      <p className="body3-r">{introduction}</p>
    </div>
  );
};

export default MyProfile;
