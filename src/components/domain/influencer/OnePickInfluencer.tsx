'use client';
import { useTranslations } from 'next-intl';

import { VscEdit } from 'react-icons/vsc';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { useOnePickInfluencerMutations } from '@/hooks/useOnePickInfluencerMutations';

import InfluencerTagList from './InfluencerTagList';
import GoFanChannelButton from './GoFanChannelButton';

interface OnePickInfluencerProps {
  influencerId: number;
  communityId: number;
  influencerName: string;
  influencerImageUrl: string;
  isOthersPick?: boolean;
}

const OnePickInfluencer = ({
  influencerId,
  communityId,
  influencerName,
  influencerImageUrl,
  isOthersPick = false,
}: OnePickInfluencerProps) => {
  const t = useTranslations('one_pick_influencer');
  const { removeOnePickInfluencerWithMessage } = useOnePickInfluencerMutations(influencerId);

  return (
    <div className="relative w-full gap-5 bg-orange-700/20 px-5 py-6 flex-center">
      {!isOthersPick && (
        <VscEdit
          className="absolute right-[15px] top-[15px] h-4 w-4 hover:scale-transition-110"
          onClick={removeOnePickInfluencerWithMessage}
        />
      )}
      <Avatar className="h-[130px] w-[105px] flex-shrink-0 rounded-none">
        <AvatarImage src={influencerImageUrl} alt="원픽 인플루언서 사진" />
        <AvatarFallback className="rounded-none bg-neutral-900/80 h1-sb">
          {influencerName[0]}
        </AvatarFallback>
      </Avatar>
      <div className="flex w-full flex-col">
        <h2 className="mb-1.5 text-orange-500 sub1-m">
          {isOthersPick ? t('ONE PICK') : t('MY ONE PICK')}
        </h2>
        <h3 className="mb-2.5 body2-sb">{influencerName}</h3>
        <InfluencerTagList contents={['음악', '보컬', '연예인']} className="mb-5" />
        <GoFanChannelButton
          variant="destructive"
          className="h-8 w-full body3-m"
          {...{ influencerId, communityId }}>
          {t('팬채널로 이동')}
        </GoFanChannelButton>
      </div>
    </div>
  );
};

export default OnePickInfluencer;
