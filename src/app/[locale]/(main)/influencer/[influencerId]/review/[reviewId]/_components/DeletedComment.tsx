import { useTranslations } from 'next-intl';

interface DeletedCommentProps {
  isMyComment: boolean;
}
const DeletedComment = ({ isMyComment }: DeletedCommentProps) => {
  const t = useTranslations('review_page');
  return (
    <header className="flex w-full items-center text-neutral-400">
      <span className="text-neutral-500 body3-r">
        {isMyComment ? t('삭제한 댓글이에요') : t('삭제된 댓글이에요')}
      </span>
    </header>
  );
};

export default DeletedComment;
