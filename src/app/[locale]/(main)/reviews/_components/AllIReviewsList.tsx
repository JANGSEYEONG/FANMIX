import { useTranslations } from 'next-intl';

import { Separator } from '@/components/ui/separator';
import MessageText from '@/components/common/MessageText';

import ImageReviewCard from './ImageReviewCard';

import { useAllInfluencersAllReviews } from '@/hooks/queries/useReviewService';
import type { AllInfluencerReviewsSortType } from '@/types/domain/reviewType';

interface AllReviewsListProps {
  sort: AllInfluencerReviewsSortType;
}
const AllReviewsList = ({ sort }: AllReviewsListProps) => {
  const t = useTranslations('review_index_page');

  const { data: reviewListData } = useAllInfluencersAllReviews({
    sort,
  });

  if (!reviewListData || reviewListData.data.length === 0) {
    return <MessageText className="h-full" message={t('등록된 한줄리뷰가 없어요')} />;
  }

  return (
    <div>
      <ul>
        {reviewListData?.data.map((reviewData) => (
          <li key={reviewData.reviewId}>
            <ImageReviewCard {...reviewData} />
            <Separator className="my-5 h-[1px] bg-neutral-800" />
          </li>
        ))}
      </ul>
      <MessageText className="pb-20" message={t('모든 리뷰를 확인했어요')} />
    </div>
  );
};

export default AllReviewsList;
