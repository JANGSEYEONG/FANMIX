import Image from 'next/image';

import { VscPassFilled } from 'react-icons/vsc';

import InteractionStats from '../board/InteractionStats';
import InfluencerRatingBar from './InfluencerRatingBar';

import { BOARD_CARD_TYPE } from '@/types/domain/board';
import type { InfluencerReview } from '@/types/domain/influencerType';

interface InfluencerReviewCardProps {
  data: InfluencerReview;
}

const InfluencerReviewCard = ({ data }: InfluencerReviewCardProps) => {
  return (
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
            <footer>
              <InteractionStats boardCardType={BOARD_CARD_TYPE.REVIEW} {...data.interaction} />
            </footer>
          </section>
        </div>
      </div>
    </article>
  );
};

export default InfluencerReviewCard;
