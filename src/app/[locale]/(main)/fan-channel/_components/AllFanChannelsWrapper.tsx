'use client';

import { useAllFanChannelList } from '../_hooks/useAllFanChannelList';

import FanChannelList from './FanChannelList';
import SortOptionsList from '@/components/common/SortOptionsList';

interface AllFanChannelsWrapperProps {
  defaultSort?: string;
}
const AllFanChannelsWrapper = ({ defaultSort }: AllFanChannelsWrapperProps) => {
  const { fanChannelListData, isLoading, isError, sortButtons } = useAllFanChannelList(defaultSort);

  return (
    <section aria-label="인증된 인플루언서들의 팬채널 리스트" className="h-full">
      <SortOptionsList className="mb-[15px]" sortButtons={sortButtons} />
      <FanChannelList {...{ fanChannelList: fanChannelListData, isLoading, isError }} />
    </section>
  );
};

export default AllFanChannelsWrapper;
