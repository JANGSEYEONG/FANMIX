import { Separator } from '@/components/ui/separator';
import { useTranslations } from 'next-intl';

interface MetricsTextProps {
  contentsRating: number;
  communicationRating: number;
  trustRating: number;
}

const MetricsText = ({ contentsRating, communicationRating, trustRating }: MetricsTextProps) => {
  const t = useTranslations('influencer_rating_bar');
  const metricList = [
    { label: t('콘텐츠'), score: contentsRating },
    { label: t('소통'), score: communicationRating },
    { label: t('신뢰'), score: trustRating },
  ];
  return (
    <ul className="gap-2 text-neutral-400 flex-center sub2-m">
      {metricList.map((metric, index) => (
        <li key={metric.label} className="flex items-center gap-2">
          <span>{`${metric.label} ${metric.score}`}</span>
          {index + 1 !== metricList.length && (
            <Separator orientation="vertical" className="h-2.5 bg-neutral-400" />
          )}
        </li>
      ))}
    </ul>
  );
};

export default MetricsText;
