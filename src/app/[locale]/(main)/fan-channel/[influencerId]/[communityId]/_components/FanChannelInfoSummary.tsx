'use client';

import Image from 'next/image';
import { Link } from '@/i18n/routing';

import { Separator } from '@/components/ui/separator';
import AuthenticatedBadge from '@/components/domain/influencer/AuthenticatedBadge';

import { formatNumber } from '@/lib/text';
import { formatDateToYYMMDD, parseISOToDate } from '@/lib/date';
import InfluencerFollowToggleButton from '@/components/domain/influencer/InfluencerFollowToggleButton';
import { useTranslations } from 'next-intl';

interface FanChannelInfoSummaryProps {
  influencerId: number;
}
const FanChannelInfoSummary = ({ influencerId }: FanChannelInfoSummaryProps) => {
  const t = useTranslations('fan_channel_page');
  const latestPostDate = '2024-10-18T14:30:00.000Z';
  const influencerName = '알간지';
  return (
    <div className="flex items-center gap-x-5 px-5 pb-[22px] pt-[30px] dark-gradient-reverse">
      <Link href={`/influencer/${influencerId}`}>
        <div className="relative h-[90px] w-[90px] flex-shrink-0">
          <Image
            priority
            src={'/assets/images/test/alganzi.png'}
            alt={`인플루언서 ${influencerName}의 사진"`}
            fill
            className="object-cover"
            sizes="90px"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col justify-center gap-y-[9px]">
        <header className="flex items-center justify-between">
          <h2 className="flex items-center gap-x-[3px]">
            <Link className="body2-sb" href={`/influencer/${influencerId}`}>
              {influencerName}
            </Link>
            <AuthenticatedBadge size={18} />
          </h2>
          <InfluencerFollowToggleButton
            isInFanChannel
            influencerId={influencerId}
            className="bg-orange-700/50 text-white"
          />
        </header>
        <div className="flex items-end justify-between">
          <div className="grid grid-cols-[auto,auto,1fr] items-center gap-x-[15px] gap-y-1 text-neutral-300 sub1-r">
            <span className="text-left">{t('팔로워')}</span>
            <Separator className="h-3 w-[1px] bg-neutral-500" aria-hidden="true" />
            <span>{formatNumber(1000)}</span>

            <span className="text-left">{t('글 수')}</span>
            <Separator className="h-3 w-[1px] bg-neutral-500" aria-hidden="true" />
            <span>{formatNumber(33)}</span>

            <span className="text-left">{t('최신 글')}</span>
            <Separator className="h-3 w-[1px] bg-neutral-500" aria-hidden="true" />
            {latestPostDate ? (
              <time>{formatDateToYYMMDD(parseISOToDate(latestPostDate))}</time>
            ) : (
              <p className="text-neutral-300/50 sub2-m">{t('아직 등록된 글이 없어요')}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FanChannelInfoSummary;
