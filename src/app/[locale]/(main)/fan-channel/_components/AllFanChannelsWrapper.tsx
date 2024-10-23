'use client';

import FanChannelList from './FanChannelList';
import SortOptionsList from '@/components/common/SortOptionsList';

import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';
import ErrorHandlingWrapper from '@/components/common/error/ErrorHandlingWrapper';

import { useAllFanChannelListSortOptions } from '../_hooks/useAllFanChannelListSortOptions';

interface AllFanChannelsWrapperProps {
  defaultSort?: string;
}
const AllFanChannelsWrapper = ({ defaultSort }: AllFanChannelsWrapperProps) => {
  const { sort, sortButtons } = useAllFanChannelListSortOptions(defaultSort);

  return (
    <section aria-label="인증된 인플루언서들의 팬채널 리스트" className="h-full">
      <SortOptionsList className="mb-[15px]" sortButtons={sortButtons} />
      <ErrorHandlingWrapper
        suspenseFallback={<ComponentSpinner className="h-full pb-24 flex-center" />}
        errorFallbackMessage={'팬채널 리스트를 불러오는데 문제가 발생했어요.\n다시 시도해 주세요.'}
        errorClassName="h-full flex-center pb-20">
        <FanChannelList sort={sort} />
      </ErrorHandlingWrapper>
    </section>
  );
};

export default AllFanChannelsWrapper;
