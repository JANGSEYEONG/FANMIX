'use client';

import { useTranslations } from 'next-intl';
import { useAllReviewsSortOptions } from '../_hooks/useAllReviewsSortOptions';

import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';
import SortOptionsList from '@/components/common/SortOptionsList';

import ErrorHandlingWrapper from '@/components/common/error/ErrorHandlingWrapper';
import AllReviewsList from './AllIReviewsList';

const AllReviewsWrapper = () => {
  const t = useTranslations('review_index_page');
  const { sort, sortButtons } = useAllReviewsSortOptions();

  return (
    <section
      aria-label="전체 한줄리뷰 리스트"
      className="mt-[30px] flex h-full w-full flex-col px-5">
      <SortOptionsList className="mb-[15px]" sortButtons={sortButtons} />
      <ErrorHandlingWrapper
        errorFallbackMessage={t(
          '한줄리뷰 전체 데이터를 가져오는데 문제가 생겼어요 다시 시도해 주세요',
        )}
        errorClassName="h-full"
        suspenseFallback={<ComponentSpinner className="h-full flex-center" />}>
        <AllReviewsList sort={sort} />
      </ErrorHandlingWrapper>
    </section>
  );
};

export default AllReviewsWrapper;
