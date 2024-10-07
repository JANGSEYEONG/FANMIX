import { cn } from '@/lib/utils';

import { useTranslations } from 'next-intl';

import { VscChevronRight } from 'react-icons/vsc';
import GoFanChannelButton from '@/components/domain/influencer/GoFanChannelButton';

interface InfluencerIntroduceProps {
  influencerId: number;
  communityId: number;
  selfIntroduction: string;
}

const InfluencerIntroduce = ({
  influencerId,
  communityId,
  selfIntroduction,
}: InfluencerIntroduceProps) => {
  const t = useTranslations('influencer_page');

  return (
    <div className="flex items-center justify-between bg-neutral-800 py-[14px] pl-[18px] pr-2.5">
      <p className={cn('w-[250px] text-neutral-100 body2-m', !selfIntroduction && 'opacity-40')}>
        {selfIntroduction || '-'}
      </p>
      <GoFanChannelButton
        {...{ influencerId, communityId: communityId }}
        className="m-0 h-fit w-fit p-0 hover:bg-transparent">
        <div className="group flex items-center">
          <span className="text-lime-400 body3-r">{t('팬채널')}</span>
          <VscChevronRight className="h-[18px] w-[18px] text-lime-400 group-hover:scale-transition-110" />
        </div>
      </GoFanChannelButton>
    </div>
  );
};

export default InfluencerIntroduce;
