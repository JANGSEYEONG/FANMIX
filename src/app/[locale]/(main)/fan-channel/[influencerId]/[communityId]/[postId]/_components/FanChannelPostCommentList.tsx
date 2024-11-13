'use client';

import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

import MessageText from '@/components/common/MessageText';
import CommentCard from '@/components/domain/board/comment/CommentCard';

interface FanChannelPostCommentListProps {
  influencerId: number;
  communityId: number;
  postId: number;
}

const FanChannelPostCommentList = ({ communityId, postId }: FanChannelPostCommentListProps) => {
  const comment = {
    commenterId: 1,
    commenterNickName: '힝이잉ㅇ',
    commentContent: '내용',
    commentDate: '2024-11-13T12:34:56.789Z',
    isDeleted: false,
    isMyComment: true,
  };
  const commentList = [
    comment,
    { ...comment, isMyComment: false },
    comment,
    { ...comment, isDeleted: true, isMyComment: false },
    comment,
    comment,
  ];
  if (commentList.length === 0)
    return <MessageText className="h-full" message={'첫 댓글을 작성해 주세요'} />;
  return (
    <section className="flex-1 bg-neutral-900 pb-[75px]">
      <ul>
        {commentList.map((comment, index) => (
          <li
            key={index}
            className={cn('w-full px-5 pt-5', comment.isMyComment && 'bg-neutral-800')}>
            <CommentCard
              {...comment}
              handleDeleteComment={() => {
                alert(`${communityId}, ${postId} 댓글 삭제`);
              }}
            />
            {index + 1 !== commentList.length && <Separator className="h-[0.7px] bg-neutral-600" />}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default FanChannelPostCommentList;
