'use client';
import { Link } from '@/i18n/routing';
import { useUserStore } from '@/stores/userStore';

interface UserActivityHistoryLinkProps {
  children: React.ReactNode;
  userId: number;
  className?: string;
}
const UserActivityHistoryLink = ({ children, userId, className }: UserActivityHistoryLinkProps) => {
  const user = useUserStore((state) => state.user);
  return (
    <Link
      href={user?.userId === userId ? '/my/activity-history' : `/user/${userId}`}
      className={className}>
      {children}
    </Link>
  );
};

export default UserActivityHistoryLink;
