'use client';
import { cn } from '@/lib/utils';

import { useTranslations } from 'next-intl';
import { useAllReviews } from '../_hooks/useAllReviews';

import { Separator } from '@/components/ui/separator';
import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';

import ImageReviewCard from './ImageReviewCard';

const LoadingView = () => (
  <div className="h-full flex-center">
    <ComponentSpinner />
  </div>
);

interface StatusMessageProps {
  message: string;
}
const StatusMessage = ({ message }: StatusMessageProps) => (
  <p className="h-full whitespace-pre-wrap text-center text-neutral-500 flex-center body3-r">
    {message}
  </p>
);

const AllReviewsWrapper = () => {
  const t = useTranslations('review_index_page');
  const { reviewListData, isLoading, isError, sortButtons } = useAllReviews();

  if (isLoading) return <LoadingView />;
  if (!isError && (!reviewListData || reviewListData.data.length === 0))
    return <StatusMessage message={t('등록된 한줄리뷰가 없어요')} />;

  return (
    <section
      aria-label="전체 한줄리뷰 리스트"
      className="mt-[30px] flex h-full w-full flex-col px-5">
      <ul className="mb-[15px] flex items-center gap-x-[15px] text-neutral-400 body3-r">
        {sortButtons.map(({ label, isSelected, onClick }) => (
          <li key={label}>
            <button className={cn(isSelected && 'text-lime-400 body3-m')} onClick={onClick}>
              {label}
            </button>
          </li>
        ))}
      </ul>
      {isError ? (
        <div className="flex-1">
          <StatusMessage
            message={t('한줄리뷰 전체 데이터를 가져오는데 문제가 생겼어요 다시 시도해 주세요')}
          />
        </div>
      ) : (
        <>
          <ul>
            {reviewListData?.data.map((reviewData) => (
              <li key={reviewData.reviewId}>
                <ImageReviewCard {...reviewData} />
                <Separator className="my-5 h-[1px] bg-neutral-800" />
              </li>
            ))}
          </ul>
          <div className="pb-20 text-center text-neutral-500 body3-r">
            {t('모든 리뷰를 확인했어요')}
          </div>
        </>
      )}
    </section>
  );
};

export default AllReviewsWrapper;
