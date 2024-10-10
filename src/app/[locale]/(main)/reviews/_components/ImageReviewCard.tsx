import Image from 'next/image';
import { Link } from '@/i18n/routing';

import MetricsText from '@/components/domain/influencer/MetricsText';
import InteractionStats from '@/components/domain/board/InteractionStats';
import AuthenticatedBadge from '@/components/domain/influencer/AuthenticatedBadge';

import { BOARD_CARD_TYPE } from '@/types/domain/boardType';
import { formatDateToYYMMDD, parseISOToDate } from '@/lib/date';

interface ImageReviewCardProps {
  influencerId: number;
  influencerName: string;
  influencerImageUrl: string;
  isAuthenticated: boolean;
  reviewId: number;
  // reviewerId: number;
  reviewerNickName: string;
  contentsRating: number;
  communicationRating: number;
  trustRating: number;
  reviewDate: string;
  reviewContent: string;
  reviewLikeCount: number;
  reviewDislikeCount: number;
  reviewCommentsCount: number;
}

const ImageReviewCard = ({
  influencerId,
  influencerName,
  influencerImageUrl,
  isAuthenticated,
  reviewId,
  // reviewerId,
  reviewerNickName,
  contentsRating,
  communicationRating,
  trustRating,
  reviewDate,
  reviewContent,
  reviewLikeCount,
  reviewDislikeCount,
  reviewCommentsCount,
}: ImageReviewCardProps) => {
  return (
    <Link href={`/influencer/${influencerId}/review/${reviewId}`}>
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
              {isAuthenticated && <AuthenticatedBadge size={18} />}
            </header>
            <div className="mb-2 flex">
              <MetricsText {...{ contentsRating, communicationRating, trustRating }} />
            </div>
            <div className="flex items-center justify-between">
              <InteractionStats
                boardCardType={BOARD_CARD_TYPE.REVIEW}
                {...{
                  likesCount: reviewLikeCount,
                  dislikesCount: reviewDislikeCount,
                  commentsCount: reviewCommentsCount,
                }}
              />
              <span className="gap-x-[5px] text-neutral-400 flex-center sub2-m">
                <span>{reviewerNickName}</span>
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
