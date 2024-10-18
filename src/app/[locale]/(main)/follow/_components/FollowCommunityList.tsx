'use client';

import { useTranslations } from 'next-intl';

import { Separator } from '@/components/ui/separator';

import MessageText from '@/components/common/MessageText';
import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';

import SortOptionsList from '@/components/common/SortOptionsList';
import FollowCommunityCard from './FollowCommunityCard';

import { useFollowCommunityList } from '../_hooks/useFollowCommunityList';

const FollowCommunityList = () => {
  const t = useTranslations('follow_page');
  const { sortButtons } = useFollowCommunityList();
  // TODO: IsLoading, isError, isEmpty는 useQuery에서 값 가져오기
  const isLoading = false;
  const isError = false;
  const isEmpty = true;
  if (isLoading) return <ComponentSpinner className="h-full pb-24 flex-center" />;
  return (
    <div className="mt-5 h-full">
      <SortOptionsList sortButtons={sortButtons} />
      <Separator className="mb-5 mt-3 h-[1px] bg-neutral-800" />
      {isError ? (
        <MessageText
          className="h-full pb-52 flex-center"
          message={t('팔로우 중인 커뮤니티를 불러오는 중 문제가 발생했어요 다시 시도해 주세요')}
        />
      ) : isEmpty ? (
        <MessageText
          className="h-full pb-52 flex-center"
          message={t('팔로우한 커뮤니티가 없어요')}
        />
      ) : (
        <>
          <ul className="mb-[30px] flex flex-col gap-y-[30px]">
            <li aria-label="커뮤니티1">
              <FollowCommunityCard />
            </li>
            <li aria-label="커뮤니티2">
              <FollowCommunityCard />
            </li>
            <li aria-label="커뮤니티3">
              <FollowCommunityCard />
            </li>
          </ul>
          <MessageText className="pb-20" message={t('팔로우 중인 모든 커뮤니티를 확인했어요')} />
        </>
      )}
    </div>
  );
};

export default FollowCommunityList;
