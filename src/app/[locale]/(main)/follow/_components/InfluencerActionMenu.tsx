'use client';

import { VscEllipsis } from 'react-icons/vsc';

import { useTranslations } from 'next-intl';

import { useFanChannelAccess } from '@/hooks/useFanChannelAccess';
import { useInfluencerFollow } from '@/hooks/useInfluencerFollow';
import { useOnePickInfluencerMutations } from '@/hooks/useOnePickInfluencerMutations';

import ButtonListDrawer from '@/components/common/ButtonListDrawer';

interface InfluencerActionMenuProps {
  influencerId: number;
  influencerName: string;
  isOnePick: boolean;
  isAuthenticated: boolean;
  communityId: number;
}

const InfluencerActionMenu = ({
  influencerId,
  influencerName,
  isOnePick,
  isAuthenticated,
  communityId,
}: InfluencerActionMenuProps) => {
  const t = useTranslations('follow_influencer_card');
  const { setOnePickInfluencer, removeOnePickInfluencer } =
    useOnePickInfluencerMutations(influencerId);
  const { checkAccessAndNavigateToFanChannel } = useFanChannelAccess();
  const { toggleFollowState } = useInfluencerFollow(influencerId);
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
    buttons.push({ text: t('팔로우 해제'), onClick: () => toggleFollowState() });
  }
  return (
    <ButtonListDrawer
      title={influencerName}
      description={isOnePick ? 'MY ONE PICK' : ''}
      buttons={buttons}>
      <nav>
        <VscEllipsis className="h-[18px] w-[18px] rotate-90 cursor-pointer duration-300 hover:scale-125" />
      </nav>
    </ButtonListDrawer>
  );
};

export default InfluencerActionMenu;
