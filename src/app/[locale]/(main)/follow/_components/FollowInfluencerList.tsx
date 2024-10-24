'use client';
import { useTranslations } from 'next-intl';

import MessageText from '@/components/common/MessageText';
import FollowInfluencerCard from './FollowInfluencerCard';

import { useFollowInfluencerList } from '../_hooks/useFollowInfluencerList';
import type { MyFollowedInfluencerSortType } from '@/types/domain/followType';

interface FollowInfluencerListProps {
  sort: MyFollowedInfluencerSortType;
}

const FollowInfluencerList = ({ sort }: FollowInfluencerListProps) => {
  const t = useTranslations('follow_page');
  const { influencerListData, isEmpty } = useFollowInfluencerList(sort);

  if (isEmpty) {
    return <MessageText className="mb-24 flex-1" message={t('팔로우한 인플루언서가 없어요')} />;
  }

  return (
    <div>
      <ul
        aria-label="팔로우 중인 인플루언서 리스트"
        className="mb-[30px] w-full gap-y-1.5 flex-col-center">
        {influencerListData.map((influencerData) => (
          <li key={influencerData.influencerId} className="w-full">
            <FollowInfluencerCard {...influencerData} />
          </li>
        ))}
      </ul>
      <MessageText className="pb-20" message={t('팔로우 중인 모든 인플루언서를 확인했어요')} />
    </div>
  );
};
export default FollowInfluencerList;
