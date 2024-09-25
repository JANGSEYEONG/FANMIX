'use client';

import { BOARD_CARD_TYPE, BOARD_TYPE, BoardType } from '@/types/domain/board';
import InteractionStats from './InteractionStats';
import { Separator } from '@/components/ui/separator';
import { InteractionStat } from '@/types/domain/influencerType';
import { useTranslations } from 'next-intl';

export interface CommentCardProps {
  postId: string;
  commentId: string;
  boardType: BoardType;
  boardName: string;
  content: string;
  interaction: InteractionStat;
}

const CommentCard = ({
  postId,
  commentId,
  boardType,
  boardName,
  content,
  interaction,
}: CommentCardProps) => {
  const t = useTranslations('comment_card');
  const handleClickCommentCard = () => {
    if (boardType === BOARD_TYPE.FAN) {
      alert(`팬 여부 체크 후, ${boardType}의 ${postId}로 이동, ${commentId}가 필요할까?`);
    } else {
      alert(`${boardType}의 ${postId}로 이동 ${commentId}가 필요할까?`);
    }
  };
  return (
    <article
      className="flex h-[88px] w-full cursor-pointer flex-col justify-center bg-neutral-800 p-3"
      onClick={handleClickCommentCard}>
      <aside className="mb-[3px] flex items-center gap-[9px]">
        <span className="text-orange-500 sub1-m">{boardName}</span>
        <Separator orientation="vertical" className="h-[9px] w-[1px] bg-neutral-300" />
        <span className="text-neutral-300 sub1-r">
          {boardType === BOARD_TYPE.COMMUNITY ? t('커뮤니티') : t('팬채널')}
        </span>
      </aside>
      <h1 className="mb-[6px] truncate body2-r">{content}</h1>
      <footer>
        <InteractionStats boardCardType={BOARD_CARD_TYPE.COMMENT} {...interaction} />
      </footer>
    </article>
  );
};

export default CommentCard;
