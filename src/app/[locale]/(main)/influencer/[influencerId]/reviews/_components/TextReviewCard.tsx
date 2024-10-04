import { cn } from '@/lib/utils';

import { Link } from '@/i18n/routing';

import MetricsText from '@/components/domain/influencer/MetricsText';
import InteractionStats from '@/components/domain/board/InteractionStats';
import { formatDateToYYMMDD } from '@/lib/date';
import { BOARD_CARD_TYPE } from '@/types/domain/boardType';

interface TextReviewCardProps {
  // influencerId: number;
  // reviewerId: string;
  // userNickname: string;
  // createdAt: string;
  // reviewContent: string;
  // likesCount: number;
  // dislikesCount: number;
  // commentsCount: number;
  // contentsRating: number;
  // communicationRating: number;
  // trustRating: number;

  isMyReview?: boolean;
}

// 리뷰 상세 페이지로 이동
const TextReviewCard = ({ isMyReview }: TextReviewCardProps) => {
  const reviewData = {
    influencerId: 2,
    reviewerId: '3',
    reviewrNickName: '작성 유저 닉네임',
    contentsRating: 3,
    communicationRating: 4,
    trustRating: 10,
    reviewDate: new Date(),
    reviewContent: ' 내 글 텍스트 텍스트 텍스트',
  };
  return (
    <Link href={`/influencer/${reviewData.influencerId}/review/${reviewData.reviewerId}`}>
      <article
        className={cn(
          'flex w-full cursor-pointer flex-col justify-center px-5 py-[15px]',
          isMyReview && 'bg-orange-700/15',
        )}>
        <aside className="mb-[5px] flex items-center justify-between">
          <span className={cn('sub1-r', isMyReview ? 'text-orange-500' : 'text-neutral-300')}>
            작성한 유저 이름
          </span>
          <time className={cn('sub2-m', isMyReview ? 'text-orange-500' : 'text-neutral-400')}>
            {formatDateToYYMMDD(new Date())}
          </time>
        </aside>
        <h1 className="mb-2.5 body2-r">내 글 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트</h1>
        <footer className="flex w-full items-center justify-between">
          <InteractionStats
            boardCardType={BOARD_CARD_TYPE.REVIEW}
            {...{ likesCount: 3, dislikesCount: 4, commentsCount: 10 }}
          />
          <MetricsText {...reviewData} />
        </footer>
      </article>
    </Link>
  );
};

export default TextReviewCard;
