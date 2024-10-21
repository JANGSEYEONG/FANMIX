'use client';
import { useRouter } from '@/i18n/routing';

import { MouseEvent } from 'react';
import { useUserStore } from '@/stores/userStore';

interface UserActivityHistoryLinkProps {
  children: React.ReactNode;
  userId: number;
  className?: string;
}
const UserActivityHistoryLink = ({ children, userId, className }: UserActivityHistoryLinkProps) => {
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  const goActivityHistoryPage = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault(); // 부모가 Link, a 태그인 경우 route 이동 방지
    const path = user?.userId === userId ? '/my/activity-history' : `/user/${userId}`;
    router.push(path);
  };
  return (
    <div className={className} onClick={goActivityHistoryPage}>
      {children}
    </div>
  );
};

export default UserActivityHistoryLink;
