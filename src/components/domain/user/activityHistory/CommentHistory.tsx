import { useTranslations } from 'next-intl';

import MessageText from '@/components/common/MessageText';
import LinkCommentCard, {
  type LinkCommentCardProps,
} from '@/components/domain/board/comment/LinkCommentCard';

interface CommentHistoryProps {
  comments: LinkCommentCardProps[];
}
const CommentHistory = ({ comments }: CommentHistoryProps) => {
  const t = useTranslations('activity_history');

  return (
    <div className="h-full w-full overflow-y-auto pb-8 pt-5 scrollbar-hide-smooth">
      <ul className="flex w-full flex-col items-center gap-[3px]">
        {comments.map((comment) => (
          <li key={comment.commentId} className="w-full">
            <LinkCommentCard {...comment} />
          </li>
        ))}
      </ul>
      <MessageText className="mb-8 mt-7" message={t('모든 내용을 확인했어요')} />
    </div>
  );
};

export default CommentHistory;
