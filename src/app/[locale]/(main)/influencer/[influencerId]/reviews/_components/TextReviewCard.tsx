import { cn } from '@/lib/utils';

import MetricsText from './MetricsText';
import InteractionStats from '@/components/domain/board/InteractionStats';
import { formatDateToYYMMDD } from '@/lib/date';
import { BOARD_CARD_TYPE } from '@/types/domain/boardType';

interface TextReviewCardProps {
  isMyReview?: boolean;
}
const TextReviewCard = ({ isMyReview }: TextReviewCardProps) => {
  const reviewData = {
    reviewerId: '3',
    reviewrNickName: '작성 유저 닉네임',
    contentsRating: 3,
    communicationRating: 4,
    trustRating: 10,
    reviewDate: new Date(),
    reviewContent: ' 내 글 텍스트 텍스트 텍스트',
  };
  return (
    <article
      className={cn(
        'flex w-full cursor-pointer flex-col justify-center px-5 py-[15px]',
        isMyReview && 'bg-orange-700/15',
      )}>
      <aside className="mb-[5px] flex items-center justify-between">
        <span className={cn('sub1-r', isMyReview ? 'text-orange-500' : 'text-neutral-300')}>
          작성한 유저 이름
        </span>
        <span className={cn('sub2-m', isMyReview ? 'text-orange-500' : 'text-neutral-400')}>
          {formatDateToYYMMDD(new Date())}
        </span>
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
  );
};

export default TextReviewCard;
