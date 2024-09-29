import { cn } from '@/lib/utils';
import { VscThumbsup, VscComment, VscThumbsdown } from 'react-icons/vsc';
import type { InteractionStat } from '@/types/domain/influencerType';
import { BOARD_CARD_TYPE, type BoardCardType } from '@/types/domain/boardType';
interface InteractionStatsProps extends InteractionStat {
  boardCardType: BoardCardType;
}
const InteractionStats = ({
  boardCardType,
  likesCount,
  dislikesCount,
  commentsCount,
}: InteractionStatsProps) => {
  const stats = [
    {
      key: 'like',
      count: likesCount,
      color: boardCardType === BOARD_CARD_TYPE.COMMENT ? 'text-neutral-300' : 'text-orange-500',
      Icon: VscThumbsup,
      visible: true,
    },
    {
      key: 'dislike',
      count: dislikesCount,
      color: 'text-neutral-300',
      Icon: VscThumbsdown,
      visible: !(
        boardCardType === BOARD_CARD_TYPE.COMMENT ||
        boardCardType === BOARD_CARD_TYPE.POPULAR_POST ||
        boardCardType === BOARD_CARD_TYPE.POPULAR_REVIEW
      ),
    },
    {
      key: 'comment',
      count: commentsCount,
      color: 'text-lavender-400',
      Icon: VscComment,
      visible: boardCardType !== BOARD_CARD_TYPE.COMMENT,
    },
  ];
  return (
    <ul className="flex gap-2.5 sub2-m">
      {stats.map(
        ({ key, count, color, Icon, visible }) =>
          visible && (
            <li key={key} className={cn('gap-x-0.5 flex-center', color)}>
              {count}
              <Icon className="h-3 w-3" />
            </li>
          ),
      )}
    </ul>
  );
};

export default InteractionStats;
