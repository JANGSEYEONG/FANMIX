'use client';

import { useTranslations } from 'next-intl';

import SortOptionsList from '@/components/common/SortOptionsList';
import FollowInfluencerList from './FollowInfluencerList';

import ErrorHandlingWrapper from '@/components/common/error/ErrorHandlingWrapper';
import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';

import { useFollowInfluencerSortOptions } from '../_hooks/useFollowInfluencerSortOptions';

const FollowInfluencerTabContent = () => {
  const t = useTranslations('follow_page');
  const { sort, sortButtons } = useFollowInfluencerSortOptions();

  return (
    <div className="mt-5 flex h-full flex-col">
      <SortOptionsList sortButtons={sortButtons} />
      <ErrorHandlingWrapper
        errorFallbackMessage={t(
          '팔로우 중인 인플루언서를 불러오는 중 문제가 발생했어요 다시 시도해 주세요',
        )}
        errorClassName="mb-28 flex-1"
        suspenseFallback={<ComponentSpinner className="h-full pb-24 flex-center" />}>
        <FollowInfluencerList sort={sort} />
      </ErrorHandlingWrapper>
    </div>
  );
};
export default FollowInfluencerTabContent;
