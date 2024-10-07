import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';

interface ViewAllReviewsButtonProps {
  influencerId: number;
}
const ViewAllReviewsButton = ({ influencerId }: ViewAllReviewsButtonProps) => {
  const t = useTranslations('influencer_page');
  return (
    <Link href={`/influencer/${influencerId}/reviews`}>
      <Button className="w-full body3-r" variant="outline">
        {t('한줄리뷰 전체보기')}
      </Button>
    </Link>
  );
};

export default ViewAllReviewsButton;
