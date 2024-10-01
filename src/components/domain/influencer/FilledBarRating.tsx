import { cn } from '@/lib/utils';

interface FilledBarRatingProps {
  score: number;
  maxScore: number;
  hideScore?: boolean;
}
const FilledBarRating = ({ score, maxScore, hideScore = false }: FilledBarRatingProps) => {
  return (
    <div className="flex items-center gap-[3px]">
      {[...Array(maxScore)].map((_, index) => (
        <div
          key={index}
          className={cn(
            'relative h-[3px] w-2.5',
            index < score ? 'bg-orange-600' : 'bg-neutral-600',
          )}>
          {!hideScore && index + 1 === score && (
            <div className="absolute bottom-[4px] right-0 text-orange-500 sub1-m">{index + 1}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilledBarRating;
