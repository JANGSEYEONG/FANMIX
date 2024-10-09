import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import FilledRatingBar from '@/components/domain/influencer/FilledRatingBar';
import { REVIEW_MAX_SCORE } from '@/types/domain/reviewType';

interface ReviewScoreCardProps {
  contentsRating: number;
  communicationRating: number;
  trustRating: number;
}
const ReviewScoreCard = ({
  contentsRating,
  communicationRating,
  trustRating,
}: ReviewScoreCardProps) => {
  const t = useTranslations('influencer_rating_bar');
  const tInfluencer = useTranslations('influencer_page');
  const average = Math.floor((contentsRating + communicationRating + trustRating) / 3);
  const metrics = [
    { label: t('콘텐츠'), score: contentsRating },
    { label: t('소통'), score: communicationRating },
    { label: t('신뢰'), score: trustRating },
  ];
  return (
    <div
      aria-label="리뷰 평균 점수"
      className="flex h-[135px] w-full items-center justify-center gap-10 bg-orange-700/20 pl-8 pr-4">
      {average ? (
        <>
          <figure className="relative w-[88px] pb-6">
            <div className="text-[50px] font-semibold leading-[70px] text-orange-500">
              {average}
            </div>
            <figcaption
              className={cn('absolute bottom-[5px] right-2.5', average > 9 && 'right-[-5px]')}>
              <div className="absolute -left-10 -top-2.5 h-[1px] w-[50px] rotate-[-45deg] transform bg-white/50" />
              <span className="text-white/50 h2-m">{REVIEW_MAX_SCORE}</span>
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
                  <FilledRatingBar score={metric.score} maxScore={REVIEW_MAX_SCORE} />
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-orange-400/40 body3-r">{tInfluencer('아직 작성된 리뷰가 없어요')}</p>
      )}
    </div>
  );
};

export default ReviewScoreCard;
