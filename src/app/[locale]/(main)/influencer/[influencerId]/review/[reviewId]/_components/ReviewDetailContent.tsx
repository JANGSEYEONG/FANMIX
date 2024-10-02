import MetricsText from '@/components/domain/influencer/MetricsText';
import InteractionStats from '@/components/domain/board/InteractionStats';

import { BOARD_CARD_TYPE } from '@/types/domain/boardType';

// interface ReviewDetailContentProps {
//   userNickname: string;
//   contentsRating: number;
//   communicationRating: number;
//   trustRating: number;
//   createdAt: string;
//   reviewContent: string;
//   likesCount: number;
//   dislikesCount: number;
//   commentsCount: number;
// }

const ReviewDetailContent = () => {
  const testData = {
    contentsRating: 10,
    communicationRating: 3,
    trustRating: 3,
    likesCount: 100,
    dislikesCount: 0,
    commentsCount: 20,
  };
  return (
    <article className="px-5">
      <header className="mb-[15px] flex flex-col justify-center gap-1.5">
        <div className="text-neutral-200 body3-m">작성한 유저 닉네임</div>
        <div className="flex items-center justify-between">
          <MetricsText {...testData} />
          <span className="text-neutral-400 sub2-m">24.09.05</span>
        </div>
      </header>
      <p className="mb-2.5 body2-r">
        텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트
        텍스트 텍스트 텍스트 텍스트 텍스트
      </p>
      <footer className="flex w-full justify-end">
        <InteractionStats boardCardType={BOARD_CARD_TYPE.REVIEW} {...testData} />
      </footer>
    </article>
  );
};

export default ReviewDetailContent;
