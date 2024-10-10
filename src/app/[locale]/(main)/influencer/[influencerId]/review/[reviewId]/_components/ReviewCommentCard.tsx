import { cn } from '@/lib/utils';

import { useMyCommentMutations } from '../_hooks/useMyCommentMutations';

import { VscChromeClose } from 'react-icons/vsc';
import { formatDateToYYMMDD, parseISOToDate } from '@/lib/date';
import DeletedComment from './DeletedComment';

interface ReviewCommentCardProps {
  influencerId: number;
  reviewId: number;
  commentId: number;
  commenterNickName: string;
  commentContent: string;
  commentDate: string;
  isDeleted: boolean;
  isMyComment: boolean;
}

const ReviewCommentCard = ({
  influencerId,
  reviewId,
  commentId,
  commenterNickName,
  commentContent,
  commentDate,
  isDeleted,
  isMyComment,
}: ReviewCommentCardProps) => {
  const { handleDeleteComment } = useMyCommentMutations();
  return (
    <div className="flex flex-col justify-center gap-y-2.5 pb-[15px]">
      {isDeleted ? (
        <DeletedComment isMyComment={isMyComment} />
      ) : (
        <>
          <header
            className={cn(
              'flex w-full items-center justify-between',
              isMyComment ? 'text-orange-500' : 'text-neutral-400',
            )}>
            <span className="body3-r">{commenterNickName}</span>
            <div className="gap-x-2 flex-center">
              <time className="sub2-m">{formatDateToYYMMDD(parseISOToDate(commentDate))}</time>
              {isMyComment && (
                <VscChromeClose
                  className="h-[18px] w-[18px] text-white hover:scale-transition-105"
                  onClick={() => {
                    handleDeleteComment(influencerId, reviewId, commentId);
                  }}
                />
              )}
            </div>
          </header>
          <p className="text-neutral-200 body2-r">{commentContent}</p>
        </>
      )}
    </div>
  );
};

export default ReviewCommentCard;
