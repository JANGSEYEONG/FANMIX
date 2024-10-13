import { cn } from '@/lib/utils';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Separator } from '@/components/ui/separator';

import { formatNumber } from '@/lib/text';
import { formatDateToYYMMDD, parseISOToDate } from '@/lib/date';

import GoFanChannelButton from '@/components/domain/influencer/GoFanChannelButton';
import AuthenticatedBadge from '@/components/domain/influencer/AuthenticatedBadge';
import { Link } from '@/i18n/routing';

interface FanChannelCardProps {
  communityId: number;
  influencerId: number;
  influencerName: string;
  influencerImageUrl: string;
  followerCount: number;
  postCount: number;
  latestPostDate: string | null;
  isFollowing: boolean;
}

// 팬 채널에 조회되는 인플루언서들은 모두 인증 인플루언서
const FanChannelCard = ({
  communityId,
  influencerId,
  influencerName,
  influencerImageUrl,
  followerCount,
  postCount,
  latestPostDate,
  isFollowing,
}: FanChannelCardProps) => {
  const t = useTranslations('fan_channel_index_page');
  return (
    <article className="flex items-center gap-x-5">
      <Link href={`/influencer/${influencerId}`}>
        <figure className="relative h-[90px] w-[90px] flex-shrink-0">
          <Image
            priority
            src={influencerImageUrl}
            alt={`인플루언서 ${influencerName}의 사진"`}
            fill
            className="object-cover"
            sizes="100%"
          />
        </figure>
      </Link>
      <div className="flex flex-1 flex-col justify-center gap-y-[9px]">
        <header>
          <h2 className="flex items-center gap-x-[3px]">
            <Link className="body2-sb" href={`/influencer/${influencerId}`}>
              {influencerName}
            </Link>
            <AuthenticatedBadge size={18} />
          </h2>
        </header>
        <div className="flex items-end justify-between">
          <div className="grid grid-cols-[auto,auto,1fr] items-center gap-x-[15px] gap-y-1 text-neutral-300 sub1-r">
            <span className="text-left">{t('팔로워')}</span>
            <Separator className="h-3 w-[1px] bg-neutral-500" aria-hidden="true" />
            <span>{formatNumber(followerCount)}</span>

            <span className="text-left">{t('글 수')}</span>
            <Separator className="h-3 w-[1px] bg-neutral-500" aria-hidden="true" />
            <span>{formatNumber(postCount)}</span>

            <span className="text-left">{t('최신 글')}</span>
            <Separator className="h-3 w-[1px] bg-neutral-500" aria-hidden="true" />
            {latestPostDate ? (
              <time>{formatDateToYYMMDD(parseISOToDate(latestPostDate))}</time>
            ) : (
              <p className="text-neutral-300/50 sub2-m">{t('아직 등록된 글이 없어요')}</p>
            )}
          </div>
          <GoFanChannelButton
            variant={isFollowing ? 'destructive' : 'outline'}
            className={cn(
              'h-9 px-4 py-2 body3-m',
              !isFollowing && 'border-orange-500 text-orange-500',
            )}
            {...{ influencerId, communityId, isFollowing }}>
            {t('팬채널')}
          </GoFanChannelButton>
        </div>
      </div>
    </article>
  );
};

export default FanChannelCard;
