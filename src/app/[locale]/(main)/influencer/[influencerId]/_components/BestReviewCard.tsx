import { Link } from '@/i18n/routing';

import InteractionStats from '@/components/domain/board/InteractionStats';

import { Separator } from '@/components/ui/separator';
import { formatDateToYYMMDD, parseISOToDate } from '@/lib/date';
import { BOARD_CARD_TYPE } from '@/types/domain/boardType';

interface BestReviewCardProps {
  influencerId: number;
  reviewId: number;
  reviewerNickName: string;
  reviewContent: string;
  reviewLikeCount: number;
  reviewDislikeCount: number;
  reviewCommentsCount: number;
  reviewDate: string;
}
const BestReviewCard = ({
  influencerId,
  reviewId,
  reviewerNickName,
  reviewContent,
  reviewLikeCount,
  reviewDislikeCount,
  reviewCommentsCount,
  reviewDate,
}: BestReviewCardProps) => {
  const interactionStats = {
    likesCount: reviewLikeCount,
    dislikesCount: reviewDislikeCount,
    commentsCount: reviewCommentsCount,
  };
  return (
    <Link href={`/influencer/${influencerId}/review/${reviewId}`}>
      <article className="relative flex w-full flex-col justify-center bg-neutral-900 px-[22px] pb-5 pt-6">
        <aside className="absolute left-0 top-0 h-0 w-0 border-b-[42px] border-l-[42px] border-r-0 border-t-0 border-solid border-transparent border-l-lime-400">
          <span className="absolute left-[-38px] top-[9px] rotate-[-45deg] transform text-neutral-800 sub2-sb">
            BEST
          </span>
        </aside>{' '}
        <h1 className="mb-[7px] body2-r">{reviewContent}</h1>
        <footer className="flex w-full items-center justify-between">
          <InteractionStats boardCardType={BOARD_CARD_TYPE.REVIEW} {...interactionStats} />
          <div className="gap-2 text-neutral-400 flex-center sub2-m">
            <span>{reviewerNickName}</span>
            <Separator orientation="vertical" className="h-2.5 w-[1px] bg-neutral-400" />
            <time>{formatDateToYYMMDD(parseISOToDate(reviewDate))}</time>
          </div>
        </footer>
      </article>
    </Link>
  );
};

export default BestReviewCard;
