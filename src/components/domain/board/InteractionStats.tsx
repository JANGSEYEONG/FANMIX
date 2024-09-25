import { VscThumbsup, VscComment, VscThumbsdown } from 'react-icons/vsc';

import { formatDateToYYMMDD } from '@/lib/date';
import { cn } from '@/lib/utils';
import type { InteractionStat } from '@/types/domain/influencerType';
import { BOARD_CARD_TYPE, type BoardCardType } from '@/types/domain/board';

interface InteractionStatsProps extends InteractionStat {
  boardCardType: BoardCardType;
}
const InteractionStats = ({
  boardCardType,
  likesCount,
  dislikesCount,
  commentsCount,
  createdAt,
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
      visible: false,
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
    <div className="flex w-full items-center justify-between sub2-m">
      <ul className="flex gap-2">
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
      <span className="text-neutral-400">{formatDateToYYMMDD(createdAt)}</span>
    </div>
  );
};

export default InteractionStats;
