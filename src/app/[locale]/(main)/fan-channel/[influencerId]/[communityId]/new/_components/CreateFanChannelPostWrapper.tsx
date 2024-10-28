'use client';

import BoardTypeLabel from '@/components/domain/board/BoardTypeLabel';
import CreatePostForm from '@/components/domain/board/CreatePostForm';
import { usePageInfoStore } from '@/stores/pageInfoStore';
import { BOARD_TYPE } from '@/types/domain/boardType';

interface CreateFanChannelPostWrapperProps {
  influencerId: number;
  communityId: number;
}
const CreateFanChannelPostWrapper = ({ communityId }: CreateFanChannelPostWrapperProps) => {
  const { influencerName } = usePageInfoStore((state) => state.pageInfo);
  return (
    <div className="flex h-full flex-col">
      <BoardTypeLabel
        boardType={BOARD_TYPE.FAN}
        boardName={`${influencerName} 팬채널`}
        iconSize={18}
        className="mb-5 flex-shrink-0 gap-x-1 px-5 sub1-m"
      />
      <CreatePostForm defaultPostData={{ communityId, title: '', content: '' }} />
    </div>
  );
};

export default CreateFanChannelPostWrapper;
