'use client';

import { Button } from '@/components/ui/button';
import { useFanChannelAccess } from '@/hooks/useFanChannelAccess';

interface GoFanChannelButtonProps {
  children: React.ReactNode;
  influencerId: number;
  communityId: number;
  isFollowing?: boolean;
  variant?: 'destructive' | 'outline';
  className?: string;
  disabled?: boolean;
}

const GoFanChannelButton = ({
  children,
  influencerId,
  communityId,
  isFollowing,
  variant,
  className,
  disabled,
}: GoFanChannelButtonProps) => {
  const { checkAccessAndNavigateToFanChannel } = useFanChannelAccess();

  return (
    <Button
      variant={variant}
      disabled={disabled}
      className={className}
      onClick={() => checkAccessAndNavigateToFanChannel(influencerId, communityId, isFollowing)}>
      {children}
    </Button>
  );
};

export default GoFanChannelButton;
