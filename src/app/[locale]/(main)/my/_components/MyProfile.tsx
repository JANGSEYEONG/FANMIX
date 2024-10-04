'use client';

import { Link } from '@/i18n/routing';
import { VscChevronRight } from 'react-icons/vsc';

import { ROUTES } from '@/constants/routes';
import { useUserStore } from '@/stores/userStore';

import UserAvatar from '@/components/domain/user/UserAvatar';
import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';

const MyProfile = () => {
  const user = useUserStore((state) => state.user);
  if (!user) {
    return <ComponentSpinner />;
  }
  return (
    <div className="flex flex-col gap-4">
      <Link
        href={ROUTES.MYPAGE_EDIT.PATH}
        className="flex h-[100px] items-center justify-between py-3 pl-4 pr-2.5 fanmix-gradient">
        <div className="gap-3.5 flex-center">
          <UserAvatar size={76} profileImgUrl={user.profileImgUrl} userNickName={user.nickName} />
          <div className="flex flex-col justify-center">
            <h2 className="h2-sb">{user.nickName}</h2>
            <p className="text-orange-200 body3-r">{user.email}</p>
          </div>
        </div>
        <VscChevronRight className="h-5 w-5 hover:scale-transition-105" />
      </Link>
      <p className="body3-r">{user.introduce}</p>
    </div>
  );
};

export default MyProfile;
