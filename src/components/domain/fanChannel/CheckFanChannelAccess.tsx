import { cn } from '@/lib/utils';
import FanChannelAccessMessage from './FanChannelAccessMessage';

import { getInfluencerFollowStatusData } from '@/services/serverFetch/followServerService';

interface CheckFanChannelAccessProps {
  children: React.ReactNode;
  influencerId: number;
  className?: string;
}

interface CheckAccessProps {
  children: React.ReactNode;
  influencerId: number;
  className?: string;
}

const CheckFanChannelAccess = ({
  children,
  influencerId,
  className,
}: CheckFanChannelAccessProps) => {
  return (
    <CheckAccess influencerId={influencerId} className={className}>
      {children}
    </CheckAccess>
  );
};

const CheckAccess = async ({ children, influencerId, className }: CheckAccessProps) => {
  const { data: isFollowing } = await getInfluencerFollowStatusData({ influencerId });

  if (!isFollowing) {
    return (
      <div className={cn('h-full pt-[65px]', className)}>
        <FanChannelAccessMessage />
      </div>
    );
  }

  return <>{children}</>;
};

export default CheckFanChannelAccess;
