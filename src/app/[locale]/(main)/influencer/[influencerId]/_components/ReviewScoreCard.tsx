import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import FilledBarRating from '@/components/domain/influencer/FilledBarRating';

const MAX_SCORE = 10;

const ReviewScoreCard = () => {
  const t = useTranslations('influencer_rating_bar');
  const average = 8;
  const metrics = [
    { label: t('콘텐츠'), score: 10 },
    { label: t('소통'), score: 3 },
    { label: t('신뢰'), score: 4 },
  ];
  return (
    <div
      aria-label="리뷰 평균 점수"
      className="flex h-[135px] w-full items-center justify-center gap-10 bg-orange-700/20 pl-8 pr-4">
      <figure className="relative w-[88px] pb-6">
        <div className="text-[50px] font-semibold leading-[70px] text-orange-500">{average}</div>
        <figcaption
          className={cn('absolute bottom-[5px] right-[10px]', average > 9 && 'right-[-5px]')}>
          <div className="absolute left-[-40px] top-[-10px] h-[1px] w-[50px] rotate-[-45deg] transform bg-white/50" />
          <span className="text-white/50 h2-m">{MAX_SCORE}</span>
        </figcaption>
      </figure>
      <ul
        aria-label="세부 평가 항목"
        className="grid grid-cols-[auto,1fr] gap-x-2.5 gap-y-4 text-neutral-400 sub1-m">
        {metrics.map((metric) => (
          <li key={metric.label} className="contents">
            <div className="flex items-center">
              <label htmlFor={`score-${metric.label}`}>{metric.label}</label>
            </div>
            <div className="flex items-center">
              <FilledBarRating score={metric.score} maxScore={MAX_SCORE} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewScoreCard;
