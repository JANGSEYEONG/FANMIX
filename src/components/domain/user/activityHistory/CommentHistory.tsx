import { useTranslations } from 'next-intl';

import MessageText from '@/components/common/MessageText';
import CommentCard, { type CommentCardProps } from '@/components/domain/board/CommentCard';

interface CommentHistoryProps {
  comments: CommentCardProps[];
}
const CommentHistory = ({ comments }: CommentHistoryProps) => {
  const t = useTranslations('my_activity_history_page');

  return (
    <div className="h-full w-full overflow-y-auto pb-8 pt-5 scrollbar-hide-smooth">
      <ul className="flex w-full flex-col items-center gap-[3px]">
        {comments.map((comment) => (
          <li key={comment.commentId} className="w-full">
            <CommentCard {...comment} />
          </li>
        ))}
      </ul>
      <MessageText className="mb-8 mt-7" message={t('모든 내용을 확인했어요')} />
    </div>
  );
};

export default CommentHistory;
