'use client';

import BoardTypeTag from '@/components/common/BoardTypeTag';
import InteractionStats from '../influencer/InteractionStats';

import type { BoardType } from '@/types/domain/board';
import type { InteractionStat } from '@/types/domain/influencerType';

export interface TextPostCardProps {
  postId: string;
  boardType: BoardType;
  boardName: string;
  content: string;
  interaction: InteractionStat;
}

const TextPostCard = ({
  postId,
  boardType,
  boardName,
  content,
  interaction,
}: TextPostCardProps) => {
  const handleClickPostCard = () => {
    alert(`팬채녈이면 팬 여부 체크 후, ${boardType}의 ${postId}로 이동`);
  };
  return (
    <article
      className="flex h-[65px] w-full cursor-pointer flex-col justify-center"
      onClick={handleClickPostCard}>
      <aside className="mb-0.5">
        <BoardTypeTag boardType={boardType} boardName={boardName} />
      </aside>
      <h1 className="mb-[7px] truncate body2-r">{content}</h1>
      <footer>
        <InteractionStats {...interaction} />
      </footer>
    </article>
  );
};

export default TextPostCard;
