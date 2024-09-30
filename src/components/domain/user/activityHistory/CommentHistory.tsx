import CommentCard, { type CommentCardProps } from '@/components/domain/board/CommentCard';
import { useTranslations } from 'next-intl';

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
      <div className="mb-8 mt-7 text-center text-neutral-500 body3-r">
        {t('모든 내용을 확인했어요')}
      </div>
    </div>
  );
};

export default CommentHistory;
