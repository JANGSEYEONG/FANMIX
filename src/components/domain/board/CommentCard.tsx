'use client';

import { useTranslations } from 'next-intl';

import { formatDateToYYMMDD } from '@/lib/date';
import { Separator } from '@/components/ui/separator';
import InteractionStats from './InteractionStats';
import type { InteractionStat } from '@/types/domain/influencerType';
import { BOARD_CARD_TYPE, BOARD_TYPE, type BoardType } from '@/types/domain/boardType';
export interface CommentCardProps {
  // influencerId:string;
  postId: string;
  commentId: string;
  boardType: BoardType;
  boardName: string;
  content: string;
  createdAt: Date;
  interaction: InteractionStat;
}

// 팬채널 혹은 커뮤니티의 게시글로 이동
const CommentCard = ({
  postId,
  commentId,
  boardType,
  boardName,
  content,
  createdAt,
  interaction,
}: CommentCardProps) => {
  const t = useTranslations('comment_card');
  const handleClickCommentCard = () => {
    if (boardType === BOARD_TYPE.FAN) {
      alert(
        `인플루언서 아이디 넘겨받고 팬 여부 체크 후, ${boardType}의 ${postId}로 이동, ${commentId}가 필요할까?`,
      );
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
      <footer className="flex w-full items-center justify-between">
        <InteractionStats boardCardType={BOARD_CARD_TYPE.COMMENT} {...interaction} />
        <time className="text-neutral-400 sub2-m">{formatDateToYYMMDD(createdAt)}</time>
      </footer>
    </article>
  );
};

export default CommentCard;
