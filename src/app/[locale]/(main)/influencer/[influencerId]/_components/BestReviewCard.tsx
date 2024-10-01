import InteractionStats from '@/components/domain/board/InteractionStats';

import { Separator } from '@/components/ui/separator';
import { ROUTES } from '@/constants/routes';
import { Link } from '@/i18n/routing';
import { formatDateToYYMMDD } from '@/lib/date';
import { BOARD_CARD_TYPE } from '@/types/domain/boardType';

const BestReviewCard = () => {
  const interaction = {
    dislikesCount: 3,
    likesCount: 2,
    commentsCount: 10,
  };
  return (
    <Link
      href={ROUTES.INFLUENCER_REVIEW.PATH.replace('[influencerId]', '3').replace(
        '[reviewId]',
        '2',
      )}>
      <article className="relative flex w-full flex-col justify-center bg-neutral-900 px-[22px] pb-5 pt-6">
        <aside className="absolute left-0 top-0 h-0 w-0 border-b-[42px] border-l-[42px] border-r-0 border-t-0 border-solid border-transparent border-l-lime-400">
          <span className="absolute left-[-38px] top-[9px] rotate-[-45deg] transform text-neutral-800 sub2-sb">
            BEST
          </span>
        </aside>{' '}
        <h1 className="mb-[7px] body2-r">
          내 글 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 베스트 리뷰는 줄입없이 전체를
          보여주는게 좋을 것 같네요 여백 맞춰서 늘어나도록 해주세요
        </h1>
        <footer className="flex w-full items-center justify-between">
          <InteractionStats boardCardType={BOARD_CARD_TYPE.REVIEW} {...interaction} />
          <div className="gap-2 text-neutral-400 flex-center sub2-m">
            <span>작성한유저네임</span>
            <Separator orientation="vertical" className="h-2.5 w-[1px] bg-neutral-400" />
            <time>{formatDateToYYMMDD(new Date())}</time>
          </div>
        </footer>
      </article>
    </Link>
  );
};

export default BestReviewCard;
