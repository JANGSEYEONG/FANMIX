import Image from 'next/image';
import { Link } from '@/i18n/routing';

import MetricsText from '@/components/domain/influencer/MetricsText';
import InteractionStats from '@/components/domain/board/InteractionStats';
import AuthenticatedBadge from '@/components/domain/influencer/AuthenticatedBadge';

import { BOARD_CARD_TYPE } from '@/types/domain/boardType';
import { formatDateToYYMMDD, parseISOToDate } from '@/lib/date';

interface ImageReviewCardProps {
  influencerId: string;
  reviewerId: string;
  influencerName: string;
  influencerImageUrl: string;
  reviewrNickName: string;
  reviewContent: string;
  reviewDate: string;
  contentsRating: number;
  communicationRating: number;
  trustRating: number;
  likesCount: number;
  dislikesCount: number;
  commentsCount: number;
}

const ImageReviewCard = ({
  influencerId,
  reviewerId,
  influencerName,
  influencerImageUrl,
  reviewrNickName,
  reviewContent,
  reviewDate,
  contentsRating,
  communicationRating,
  trustRating,
  likesCount,
  dislikesCount,
  commentsCount,
}: ImageReviewCardProps) => {
  return (
    <Link href={`/influencer/${influencerId}/review/${reviewerId}`}>
      <article className="gap-y-2.5 flex-col-center">
        <div className="w-full gap-x-[14px] flex-center">
          <figure className="relative h-[70px] w-[70px] flex-shrink-0">
            <Image
              priority
              src={influencerImageUrl}
              alt={`인플루언서 ${influencerName} 사진`}
              fill
              className="object-cover"
              sizes="100%"
            />
          </figure>
          <div className="flex-1">
            <header className="mb-0.5 flex items-center gap-x-[3px]">
              <h2 className="body2-sb">{influencerName}</h2>
              <AuthenticatedBadge size={18} />
            </header>
            <div className="mb-2 flex">
              <MetricsText {...{ contentsRating, communicationRating, trustRating }} />
            </div>
            <div className="flex items-center justify-between">
              <InteractionStats
                boardCardType={BOARD_CARD_TYPE.REVIEW}
                {...{ likesCount, dislikesCount, commentsCount }}
              />
              <span className="gap-x-[5px] text-neutral-400 flex-center sub2-m">
                <span>{reviewrNickName}</span>
                <time>{formatDateToYYMMDD(parseISOToDate(reviewDate))}</time>
              </span>
            </div>
          </div>
        </div>
        <p className="w-full bg-neutral-800 px-[15px] py-2.5 body3-r">{reviewContent}</p>
      </article>
    </Link>
  );
};

export default ImageReviewCard;
