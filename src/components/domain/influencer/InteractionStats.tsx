import { VscThumbsup, VscThumbsdown, VscComment } from 'react-icons/vsc';

import { formatDateToYYMMDD } from '@/lib/date';
import { cn } from '@/lib/utils';
import type { InteractionStat } from '@/types/domain/influencerType';

interface InteractionStatsProps extends InteractionStat {}
const InteractionStats = ({
  likesCount,
  dislikesCount,
  commentsCount,
  createdAt,
}: InteractionStatsProps) => {
  const stats = [
    {
      key: 'like',
      count: likesCount,
      color: 'text-orange-500',
      Icon: VscThumbsup,
    },
    {
      key: 'dislike',
      count: dislikesCount,
      color: 'text-neutral-300',
      Icon: VscThumbsdown,
    },
    {
      key: 'comment',
      count: commentsCount,
      color: 'text-lavender-400',
      Icon: VscComment,
    },
  ];
  return (
    <div className="flex w-full items-center justify-between sub2-m">
      <ul className="flex gap-2">
        {stats.map(({ key, color, count, Icon }) => (
          <li key={key} className={cn('gap-x-0.5 flex-center', color)}>
            {count}
            <Icon className="h-3 w-3" />
          </li>
        ))}
      </ul>
      <span className="text-neutral-400">{formatDateToYYMMDD(createdAt)}</span>
    </div>
  );
};

export default InteractionStats;
