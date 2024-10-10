import { useMemo } from 'react';

import { useTranslations } from 'next-intl';

import { Separator } from '@/components/ui/separator';
import { LiaStarSolid } from 'react-icons/lia';

interface InfluencerRatingBarProps {
  contentsRating: number;
  communicationRating: number;
  trustRating: number;
}

const InfluencerRatingBar = ({
  contentsRating,
  communicationRating,
  trustRating,
}: InfluencerRatingBarProps) => {
  const t = useTranslations('influencer_rating_bar');
  const { metrics, average } = useMemo(() => {
    const metricsArray = [
      { label: t('콘텐츠'), score: contentsRating },
      { label: t('소통'), score: communicationRating },
      { label: t('신뢰'), score: trustRating },
    ];
    const avgScore = Math.floor((contentsRating + communicationRating + trustRating) / 3);
    return { metrics: metricsArray, average: avgScore };
  }, [t, contentsRating, communicationRating, trustRating]);

  return (
    <div className="flex h-5 w-full sub1-sb">
      <h3 className="w-10 flex-shrink-0 gap-[2.5px] bg-orange-600 flex-center">
        <LiaStarSolid className="h-3 w-3" />
        <span>{average}</span>
      </h3>
      <ul className="flex w-full items-center px-2.5 orange-600-gradient">
        {metrics.map((metric, index) => (
          <li key={metric.label} className="flex items-center">
            <span className="gap-1 flex-center">
              <label className="sub1-r">{metric.label}</label>
              <span>{metric.score}</span>
            </span>
            {index !== metrics.length - 1 && (
              <Separator orientation="vertical" className="mx-2.5 h-3 w-[1px] bg-orange-200/50" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfluencerRatingBar;
