import Image from 'next/image';
import { Link } from '@/i18n/routing';

import { formatDateToYYMMDD, parseISOToDate } from '@/lib/date';

import { VscPassFilled } from 'react-icons/vsc';

import InfluencerRatingBar from './InfluencerRatingBar';
import InteractionStats from '../board/InteractionStats';

import { BOARD_CARD_TYPE } from '@/types/domain/boardType';
import type { ImageReviewCardData } from '@/types/domain/reviewType';

interface ImageReviewCardWithRatingBarProps {
  reviewData: ImageReviewCardData;
  isPopular?: boolean;
}

const ImageReviewCardWithRatingBar = ({
  reviewData: {
    influencerId,
    reviewId,
    influencerName,
    influencerImageUrl,
    influencerIsAuthenticated,
    contentsRating,
    communicationRating,
    trustRating,
    reviewContent,
    reviewDate,
    reviewLikeCount,
    reviewDislikeCount,
    reviewCommentsCount,
  },
  isPopular = false,
}: ImageReviewCardWithRatingBarProps) => {
  return (
    <Link href={`/influencer/${influencerId}/review/${reviewId}`}>
      <article
        aria-label={`${influencerName}에 대한 리뷰`}
        className="flex h-[124px] w-full cursor-pointer gap-4">
        <div aria-label="인플루언서 사진" className="relative h-[124px] w-[100px] flex-shrink-0">
          <Image
            priority
            src={influencerImageUrl}
            alt={`${influencerName}의 프로필 이미지`}
            sizes="100px"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full overflow-hidden">
          <header aria-label="인플루언서 이름" className="mb-1.5 flex items-center gap-1">
            <h1 className="body2-sb">{influencerName}</h1>
            {influencerIsAuthenticated && (
              <VscPassFilled
                className="h-[18px] w-[18px] text-lime-400"
                aria-label="인증된 인플루언서"
              />
            )}
          </header>
          <div className="flex flex-col gap-[14px]">
            <section aria-label="인플루언서 평가 점수">
              <InfluencerRatingBar {...{ contentsRating, communicationRating, trustRating }} />
            </section>
            <section
              aria-label="한줄 리뷰"
              className="flex h-[60px] w-full flex-col justify-center gap-1.5 bg-neutral-800 p-2.5">
              <p className="truncate body3-m">{reviewContent}</p>
              <footer className="flex w-full items-center justify-between">
                <InteractionStats
                  boardCardType={
                    isPopular ? BOARD_CARD_TYPE.POPULAR_REVIEW : BOARD_CARD_TYPE.REVIEW
                  }
                  {...{
                    likesCount: reviewLikeCount,
                    dislikesCount: reviewDislikeCount,
                    commentsCount: reviewCommentsCount,
                  }}
                />
                <time className="text-neutral-400 sub2-m">
                  {formatDateToYYMMDD(parseISOToDate(reviewDate))}
                </time>
              </footer>
            </section>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ImageReviewCardWithRatingBar;
