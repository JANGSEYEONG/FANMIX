'use client';

import { useTranslations } from 'next-intl';

import { VscEllipsis } from 'react-icons/vsc';

import ButtonListDrawer from '@/components/common/ButtonListDrawer';
import useInfluencerAction from '@/hooks/useInfluencerAction';

interface InfluencerActionMenuProps {
  influencerId: string;
  influencerName: string;
  isOnePick: boolean;
  isAuthenticated: boolean;
  communityId: string;
}

const InfluencerActionMenu = ({
  influencerId,
  influencerName,
  isOnePick,
  isAuthenticated,
  communityId,
}: InfluencerActionMenuProps) => {
  const t = useTranslations('follow_influencer_card');
  const { goToFanChannel, unfollowInfluencer, setOnePickInfluencer, removeOnePickInfluencer } =
    useInfluencerAction(influencerId);

  const buttons = [];

  if (isAuthenticated) {
    buttons.push({ text: t('팬채널 가기'), onClick: () => goToFanChannel(communityId) });
  }

  if (isOnePick) {
    buttons.push({ text: t('원픽 인플루언서 해제'), onClick: removeOnePickInfluencer });
  } else {
    buttons.push({ text: t('원픽 인플루언서 변경'), onClick: setOnePickInfluencer });
    buttons.push({ text: t('팔로우 해제'), onClick: unfollowInfluencer });
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
