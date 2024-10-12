'use client';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { useFollowInfluencerList } from '../_hooks/useFollowInfluencerList';

import FollowInfluencerCard from './FollowInfluencerCard';
import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';

const LoadingView = () => (
  <div className="h-full pb-24 flex-center">
    <ComponentSpinner />
  </div>
);

interface StatusMessageProps {
  message: string;
}
const StatusMessage = ({ message }: StatusMessageProps) => (
  <p className="mb-24 flex-1 whitespace-pre-wrap text-center text-neutral-500 flex-center body3-r">
    {message}
  </p>
);

const FollowInfluencerList = () => {
  const t = useTranslations('follow_page');

  const { influencerListData, isEmpty, isLoading, isError, sortButtons } =
    useFollowInfluencerList();

  if (isLoading) return <LoadingView />;

  return (
    <div className="mt-5 flex h-full flex-col">
      <nav aria-label="정렬 옵션">
        <ul className="flex items-center gap-x-[15px] text-neutral-400 body3-r">
          {sortButtons.map(({ label, isSelected, onClick }) => (
            <li key={label}>
              <button className={cn(isSelected && 'text-lime-400 body3-m')} onClick={onClick}>
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {isError ? (
        <StatusMessage
          message={t('팔로우 중인 인플루언서를 불러오는 중 문제가 발생했어요 다시 시도해 주세요')}
        />
      ) : isEmpty ? (
        <StatusMessage message={t('팔로우한 인플루언서가 없어요')} />
      ) : (
        <>
          <ul
            aria-label="팔로우 중인 인플루언서 리스트"
            className="mb-[30px] w-full gap-y-1.5 flex-col-center">
            {influencerListData.map((influencerData) => (
              <li key={influencerData.influencerId} className="w-full">
                <FollowInfluencerCard {...influencerData} />
              </li>
            ))}
          </ul>
          <p className="text-center text-neutral-500 body3-r">
            {t('팔로우 중인 모든 인플루언서를 확인했어요')}
          </p>
        </>
      )}
    </div>
  );
};
export default FollowInfluencerList;
