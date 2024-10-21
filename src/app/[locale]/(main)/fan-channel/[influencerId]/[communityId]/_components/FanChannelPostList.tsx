'use client';
import { Separator } from '@/components/ui/separator';
import MessageText from '@/components/common/MessageText';

import FanChannelPostCard from './FanChannelPostCard';
import SortOptionsList from '@/components/common/SortOptionsList';

import { useFanChannelPostList } from '../_hooks/useFanChannelPostList';

const FanChannelPostList = () => {
  const { sortButtons } = useFanChannelPostList();
  return (
    <section className="mt-[25px] px-5">
      <SortOptionsList sortButtons={sortButtons} />
      <ul className="mt-[15px] flex flex-col">
        <li>
          <Separator className="h-[1px] bg-neutral-800" />
          <FanChannelPostCard isMyPost={false} />
        </li>
        <li>
          <Separator className="h-[1px] bg-neutral-800" />
          <FanChannelPostCard isMyPost={false} postImageUrl={'33'} />
        </li>
        <li>
          <Separator className="h-[1px] bg-neutral-800" />
          <FanChannelPostCard isMyPost={true} />
        </li>
        <li>
          <Separator className="h-[1px] bg-neutral-800" />
          <FanChannelPostCard isMyPost={false} />
        </li>
        <li>
          <Separator className="h-[1px] bg-neutral-800" />
          <FanChannelPostCard isMyPost={false} />
          <Separator className="h-[1px] bg-neutral-800" />
        </li>
      </ul>
      <MessageText className="py-10" message="모든 내용을 확인했습니다." />
    </section>
  );
};

export default FanChannelPostList;
