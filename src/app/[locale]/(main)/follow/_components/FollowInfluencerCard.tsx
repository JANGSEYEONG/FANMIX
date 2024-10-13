import { cn } from '@/lib/utils';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import Image from 'next/image';
import InfluencerActionMenu from './InfluencerActionMenu';
import FilledRatingBar from '@/components/domain/influencer/FilledRatingBar';
import AuthenticatedBadge from '@/components/domain/influencer/AuthenticatedBadge';
import GoFanChannelButton from '@/components/domain/influencer/GoFanChannelButton';

import { REVIEW_MAX_SCORE } from '@/types/domain/reviewType';
import { formatDateToYYMMDD, parseISOToDate } from '@/lib/date';

interface FollowInfluencerCardProps {
  influencerId: number;
  influencerName: string;
  influencerImageUrl: string;
  authenticationStatus: 'APPROVED' | 'NOT_AUTHENTICATED';
  latestReviewDate: string | null;
  myAverageRating: number;
  fanChannelId: number | null;
  isOnePick: boolean;
}

// 팬 채널로 이동하는 버튼이 따로 존재, 카드 클릭으로 페이지 이동 x
// 팬 채널에 조회되는 인플루언서들은 모두 인증 인플루언서
const FollowInfluencerCard = ({
  influencerId,
  influencerName,
  influencerImageUrl,
  authenticationStatus,
  latestReviewDate,
  myAverageRating,
  fanChannelId,
  isOnePick,
}: FollowInfluencerCardProps) => {
  const t = useTranslations('follow_influencer_card');
  const isAuthenticated = authenticationStatus === 'APPROVED';
  return (
    <article
      className={cn(
        'relative gap-x-4 py-[15px] flex-center',
        isOnePick && 'mt-[15px] bg-orange-700/20 py-5',
      )}>
      <Link className="flex-shrink-0" href={`/influencer/${influencerId}`}>
        <figure className="relative h-[100px] w-[100px] bg-slate-400">
          <Image
            priority
            src={influencerImageUrl}
            alt={`인플루언서 ${influencerName}의 사진`}
            fill
            className="object-cover"
            sizes="100%"
          />
        </figure>
      </Link>
      <div className="flex-1">
        <header className="mb-1 flex justify-between">
          <div className="flex flex-col justify-center gap-y-1">
            {isOnePick && <p className="text-orange-500 sub1-m">MY ONE PICK</p>}
            <h2 className="flex items-center gap-x-[3px]">
              <Link href={`/influencer/${influencerId}`} className="body2-sb">
                {influencerName}
              </Link>
              {isAuthenticated && <AuthenticatedBadge size={18} />}
            </h2>
          </div>
          <InfluencerActionMenu
            {...{
              influencerId,
              communityId: fanChannelId,
              influencerName,
              isOnePick,
              isAuthenticated,
            }}
          />
        </header>
        <div className="mb-2.5 flex items-center gap-x-1.5 text-neutral-300 sub1-r">
          <p>{t('최신리뷰')}</p>
          {latestReviewDate ? (
            <time>{formatDateToYYMMDD(parseISOToDate(latestReviewDate))}</time>
          ) : (
            <p className="text-neutral-300/50 sub2-m">{'아직 등록된 리뷰가 없어요'}</p>
          )}
        </div>
        <div className="flex items-end justify-between">
          <div className="flex flex-col justify-center gap-y-1">
            <div className="flex items-end gap-x-[5px]">
              <span className="leading-6 text-orange-500 h1-sb-leading-0">
                {Math.floor(myAverageRating)}
              </span>
              <span className="text-white/50 sub1-r">{`/ ${REVIEW_MAX_SCORE}`}</span>
            </div>
            <FilledRatingBar
              maxScore={REVIEW_MAX_SCORE}
              score={Math.floor(myAverageRating)}
              hideScore
            />
          </div>
          <GoFanChannelButton
            {...{ influencerId, communityId: fanChannelId }}
            variant="destructive"
            className={cn('h-9 px-4 py-2 body3-m', !isAuthenticated && 'bg-neutral-600')}
            isFollowing={true}
            disabled={!isAuthenticated}>
            {isAuthenticated ? t('팬채널') : t('미인증')}
          </GoFanChannelButton>
        </div>
      </div>
      {/* 원픽인플루언서용 좌우 배경색 */}
      {isOnePick && (
        <>
          <div className="absolute -left-5 top-0 h-full w-5 bg-orange-700/20" aria-hidden="true" />
          <div className="absolute -right-5 top-0 h-full w-5 bg-orange-700/20" aria-hidden="true" />
        </>
      )}
    </article>
  );
};
export default FollowInfluencerCard;
