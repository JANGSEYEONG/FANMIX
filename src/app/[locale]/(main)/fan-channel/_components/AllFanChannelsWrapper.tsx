'use client';

import { useAllFanChannelList } from '../_hooks/useAllFanChannelList';

import FanChannelList from './FanChannelList';
import SortOptionsList from '@/components/common/SortOptionsList';
import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';

const AllFanChannelsWrapper = () => {
  const { fanChannelListData, isLoading, isError, sortButtons } = useAllFanChannelList();

  if (isLoading) return <ComponentSpinner className="h-full flex-center" />;
  return (
    <section aria-label="인증된 인플루언서들의 팬채널 리스트" className="h-full">
      <SortOptionsList className="mb-[15px]" sortButtons={sortButtons} />
      <FanChannelList {...{ fanChannelList: fanChannelListData, isLoading, isError }} />
    </section>
  );
};

export default AllFanChannelsWrapper;
