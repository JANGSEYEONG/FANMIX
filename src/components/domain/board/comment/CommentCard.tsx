import { cn } from '@/lib/utils';
import { VscChromeClose } from 'react-icons/vsc';

import DeletedComment from './DeletedComment';
import UserActivityHistoryLink from '../../user/UserActivityHistoryLink';

import { formatDateToYYMMDD, parseISOToDate } from '@/lib/date';

interface CommentCardProps {
  commenterId: number;
  commenterNickName: string;
  commentContent: string;
  commentDate: string;
  isDeleted: boolean;
  isMyComment: boolean;
  handleDeleteComment: () => void;
}
const CommentCard = ({
  commenterId,
  commenterNickName,
  commentContent,
  commentDate,
  isDeleted,
  isMyComment,
  handleDeleteComment,
}: CommentCardProps) => {
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
            <UserActivityHistoryLink userId={commenterId} className="body3-r">
              {commenterNickName}
            </UserActivityHistoryLink>
            <div className="gap-x-2 flex-center">
              <time className="sub2-m">{formatDateToYYMMDD(parseISOToDate(commentDate))}</time>
              {isMyComment && (
                <VscChromeClose
                  className="h-[18px] w-[18px] text-white hover:scale-transition-105"
                  onClick={handleDeleteComment}
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

export default CommentCard;
