import ViewStat from '@/components/domain/board/ViewStat';
import InteractionStats from '@/components/domain/board/InteractionStats';
import { BOARD_CARD_TYPE } from '@/types/domain/boardType';

interface PostInteractionAreaProps {
  likesCount: number;
  dislikesCount: number;
  commentsCount: number;
  viewCount: number;
}
const PostInteractionArea = ({
  likesCount,
  dislikesCount,
  commentsCount,
  viewCount,
}: PostInteractionAreaProps) => {
  return (
    <div className="mt-5 flex flex-col gap-y-[15px]">
      <div className="flex w-full items-center justify-end gap-x-2">
        {/* <LikeButton>추천</LikeButton>
        <DislikeButton>비추천</DislikeButton> */}
      </div>
      <div className="flex items-center justify-between">
        <ViewStat viewCount={viewCount} />
        <InteractionStats
          boardCardType={BOARD_CARD_TYPE.POST}
          {...{ likesCount, dislikesCount, commentsCount }}
        />
      </div>
    </div>
  );
};

export default PostInteractionArea;
