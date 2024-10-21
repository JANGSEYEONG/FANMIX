'use client';
import { Separator } from '@/components/ui/separator';
import MessageText from '@/components/common/MessageText';

import SortOptionsList from '@/components/common/SortOptionsList';
import CommunityPostCard from '@/components/domain/community/CommunityPostCard';
import { useCommunityPostList } from '../_hooks/useCommunityPostList';

const CommunityPostList = () => {
  const { sortButtons } = useCommunityPostList();
  return (
    <section className="mt-[25px] px-5">
      <SortOptionsList sortButtons={sortButtons} />
      <ul className="mt-[15px] flex flex-col">
        <li>
          <Separator className="h-[1px] bg-neutral-800" />
          <CommunityPostCard isMyPost postImageUrl="url이라고 가정" />
        </li>
        <li>
          <Separator className="h-[1px] bg-neutral-800" />
          <CommunityPostCard isMyPost={false} />
        </li>
        <li>
          <Separator className="h-[1px] bg-neutral-800" />
          <CommunityPostCard isMyPost={false} postImageUrl="url이라고 가정" />
        </li>
        <li>
          <Separator className="h-[1px] bg-neutral-800" />
          <CommunityPostCard isMyPost={false} postImageUrl="url이라고 가정" />
        </li>
      </ul>
      <MessageText className="py-10" message="모든 내용을 확인했습니다." />
    </section>
  );
};

export default CommunityPostList;
