'use client';

import { cn } from '@/lib/utils';
import { VscEllipsis } from 'react-icons/vsc';

import { useTranslations } from 'next-intl';

import { useFanChannelAccess } from '@/hooks/useFanChannelAccess';
import { useOnePickInfluencerMutations } from '@/hooks/useOnePickInfluencerMutations';
import { useInfluencerFollowMutations } from '@/hooks/useInfluencerFollowMutations';

import ButtonListDrawer from '@/components/common/ButtonListDrawer';

interface InfluencerActionMenuProps {
  influencerId: number;
  influencerName: string;
  communityId: number | null;
  isOnePick: boolean;
  isAuthenticated: boolean;
}

const InfluencerActionMenu = ({
  influencerId,
  influencerName,
  communityId,
  isOnePick,
  isAuthenticated,
}: InfluencerActionMenuProps) => {
  const t = useTranslations('follow_influencer_card');

  const { setOnePickInfluencer, removeOnePickInfluencer } =
    useOnePickInfluencerMutations(influencerId);

  const { handleInfluencerUnfollow } = useInfluencerFollowMutations();
  const { checkAccessAndNavigateToFanChannel } = useFanChannelAccess();

  const buttons = [];

  if (isAuthenticated) {
    buttons.push({
      text: t('팬채널 가기'),
      onClick: () => checkAccessAndNavigateToFanChannel(influencerId, communityId, true),
    });
  }

  if (isOnePick) {
    buttons.push({ text: t('원픽 인플루언서 해제'), onClick: removeOnePickInfluencer });
  } else {
    buttons.push({ text: t('원픽 인플루언서 변경'), onClick: setOnePickInfluencer });
    buttons.push({ text: t('팔로우 해제'), onClick: () => handleInfluencerUnfollow(influencerId) });
  }

  return (
    <ButtonListDrawer
      title={influencerName}
      description={isOnePick ? 'MY ONE PICK' : ''}
      buttons={buttons}>
      <nav>
        <VscEllipsis
          className={cn(
            'h-[18px] w-[18px] rotate-90 cursor-pointer duration-300 hover:scale-125',
            isOnePick && 'text-orange-400',
          )}
        />
      </nav>
    </ButtonListDrawer>
  );
};

export default InfluencerActionMenu;
