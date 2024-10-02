'use client';

import { Button } from '@/components/ui/button';
import useFanChannelAccess from '@/hooks/useFanChannelAccess';

interface GoFanChannelButtonProps {
  children: React.ReactNode;
  influencerId: string;
  communityId: string;
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
  const { checkAccessAndNavigate } = useFanChannelAccess();

  return (
    <Button
      variant={variant}
      disabled={disabled}
      className={className}
      onClick={() => checkAccessAndNavigate(influencerId, communityId, isFollowing)}>
      {children}
    </Button>
  );
};

export default GoFanChannelButton;
