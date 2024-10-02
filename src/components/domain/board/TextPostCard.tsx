'use client';

import { formatDateToYYMMDD } from '@/lib/date';

import BoardTypeTag from './BoardTypeTag';
import InteractionStats from './InteractionStats';

import { BOARD_CARD_TYPE, BOARD_TYPE, type BoardType } from '@/types/domain/boardType';
import type { InteractionStat } from '@/types/domain/influencerType';

export interface TextPostCardProps {
  postId: string;
  boardType: BoardType;
  boardName: string;
  content: string;
  createdAt: Date;
  interaction: InteractionStat;
  isPopular?: boolean;
}

const TextPostCard = ({
  postId,
  boardType,
  boardName,
  content,
  createdAt,
  interaction,
  isPopular = false,
}: TextPostCardProps) => {
  const handleClickPostCard = () => {
    if (boardType === BOARD_TYPE.FAN) {
      alert(`팬 여부 체크 후, ${boardType}의 ${postId}로 이동`);
    } else {
      alert(`${boardType}의 ${postId}로 이동`);
    }
  };
  return (
    <article
      className="flex h-[65px] w-full cursor-pointer flex-col justify-center"
      onClick={handleClickPostCard}>
      <aside className="mb-0.5">
        <BoardTypeTag boardType={boardType} boardName={boardName} />
      </aside>
      <h1 className="mb-[7px] truncate body2-r">{content}</h1>
      <footer className="flex w-full items-center justify-between">
        <InteractionStats
          boardCardType={isPopular ? BOARD_CARD_TYPE.POPULAR_POST : BOARD_CARD_TYPE.POST}
          {...interaction}
        />
        <time className="text-neutral-400 sub2-m">{formatDateToYYMMDD(createdAt)}</time>
      </footer>
    </article>
  );
};

export default TextPostCard;