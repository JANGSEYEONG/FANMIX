import { Separator } from '@/components/ui/separator';
import MessageText from '@/components/common/MessageText';

import FanChannelCard from './FanChannelCard';
import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';
import type { AllFanChannelsResponse } from '@/types/service/fanChannelServiceType';

interface FanChannelListProps {
  fanChannelList: AllFanChannelsResponse | undefined;
  isLoading: boolean;
  isError: boolean;
}
const FanChannelList = ({ fanChannelList, isLoading, isError }: FanChannelListProps) => {
  if (isLoading) {
    return <ComponentSpinner className="h-full pb-24 flex-center" />;
  }
  if (isError) {
    return (
      <MessageText
        className="h-full pb-20"
        message={'팬채널 리스트를 불러오는데 문제가 발생했어요.\n다시 시도해 주세요.'}
      />
    );
  }
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
