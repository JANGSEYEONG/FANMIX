import Image from 'next/image';
import { Link } from '@/i18n/routing';

import { formatDateToYYMMDD } from '@/lib/date';

import { VscPassFilled } from 'react-icons/vsc';

import InfluencerRatingBar from './InfluencerRatingBar';
import InteractionStats from '../board/InteractionStats';

import { BOARD_CARD_TYPE } from '@/types/domain/boardType';
import type { InfluencerReview } from '@/types/domain/influencerType';

interface ImageReviewCardWithRatingBarProps {
  // influencerId: string;
  // reviewId: string;
  // influencerName: string;
  // influencerImageUrl: string;
  // isAuthenticated: boolean;
  // contentScore: number;
  // communicationScore: number;
  // trustworthinessScore: number;
  // reviewContent: string;
  // createdAt: string;
  // likesCount: number;
  // dislikesCount: number;
  // commentsCount: number;

  data: InfluencerReview;
  isPopular?: boolean;
}

const ImageReviewCardWithRatingBar = ({
  data,
  isPopular = false,
}: ImageReviewCardWithRatingBarProps) => {
  return (
    <Link href={`/influencer/3/review/5`}>
      <article
        aria-label={`${data.influencer.name}에 대한 리뷰`}
        className="flex h-[124px] w-full cursor-pointer gap-4">
        <figure aria-label="인플루언서 사진" className="relative h-[124px] w-[100px] flex-shrink-0">
          <Image
            priority
            src={data.influencer.imageSrc}
            alt={`${data.influencer.name}의 프로필 이미지`}
            fill
            sizes="100%"
            className="object-cover"
          />
        </figure>
        <div className="w-full overflow-hidden">
          <header aria-label="인플루언서 이름" className="mb-1.5 flex items-center gap-1">
            <h1 className="body2-sb">{data.influencer.name}</h1>
            {data.influencer.isVerified && (
              <VscPassFilled
                className="h-[18px] w-[18px] text-lime-400"
                aria-label="인증된 인플루언서"
              />
            )}
          </header>
          <div className="flex flex-col gap-[14px]">
            <section aria-label="인플루언서 평가 점수">
              <InfluencerRatingBar {...data.rating} />
            </section>
            <section
              aria-label="한줄 리뷰"
              className="flex h-[60px] w-full flex-col justify-center gap-1.5 bg-neutral-800 p-2.5">
              <p className="truncate body3-m">{data.content}</p>
              <footer className="flex w-full items-center justify-between">
                <InteractionStats
                  boardCardType={
                    isPopular ? BOARD_CARD_TYPE.POPULAR_REVIEW : BOARD_CARD_TYPE.REVIEW
                  }
                  {...data.interaction}
                />
                <time className="text-neutral-400 sub2-m">
                  {formatDateToYYMMDD(data.createdAt)}
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
