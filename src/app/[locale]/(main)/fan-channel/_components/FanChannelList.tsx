import { Separator } from '@/components/ui/separator';

import MessageText from '@/components/common/MessageText';
import FanChannelCard from './FanChannelCard';
import { useGetAllFanChannels } from '@/hooks/queries/useFanChannelService';
import type { AllFanChannelsSortType } from '@/types/domain/fanChannelType';

interface FanChannelListProps {
  sort: AllFanChannelsSortType;
}
const FanChannelList = ({ sort }: FanChannelListProps) => {
  const { data: fanChannelList } = useGetAllFanChannels({ sort });

  if (!fanChannelList || fanChannelList.data.length === 0) {
    return <MessageText className="h-full pb-20" message="아직 생성된 팬채널이 없어요." />;
  }
  return (
    <ul className="pb-20">
      {fanChannelList.data.map((fanChannel, index) => (
        <li key={fanChannel.influencerId}>
          <FanChannelCard {...fanChannel} isFollowing={fanChannel.isFollowing} />
          {fanChannelList.data.length - 1 !== index && (
            <Separator className="my-5 h-[1px] bg-neutral-800" />
          )}
        </li>
      ))}
    </ul>
  );
};

export default FanChannelList;
