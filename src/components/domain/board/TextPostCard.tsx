'use client';

import { useInformationToast } from '@/hooks/useInformationToast';

import BoardTypeLabel from './BoardTypeLabel';
import InteractionStats from './InteractionStats';

import { formatDateToYYMMDD, parseISOToDate } from '@/lib/date';
import { BOARD_CARD_TYPE, BOARD_TYPE } from '@/types/domain/boardType';
import type { TextPostCardData } from '@/types/domain/communityType';

export interface TextPostCardProps {
  postData: TextPostCardData;
  isPopular?: boolean;
}

const TextPostCard = ({
  postData: {
    communityId,
    communityName,
    influencerId,
    influencerName,
    postId,
    content,
    likeCount,
    commentCount,
    crDate,
  },
  isPopular = false,
}: TextPostCardProps) => {
  // influencerId가 존재하면 팬채널, 없으면 커뮤니티
  const boardType = influencerId ? BOARD_TYPE.FAN : BOARD_TYPE.COMMUNITY;
  const isFanChannel = boardType === BOARD_TYPE.FAN;
  const { showConfirmToast } = useInformationToast();
  const handleClickPostCard = () => {
    showConfirmToast('포스트 기능은 준비중 이에요.');
    return;
    if (isFanChannel) {
      // checkAccessAndNavigateToFanChannel 사용
      console.log(
        `${influencerId}의 팬 여부 체크 후, ${boardType}의 ${communityId}커뮤니티의 ${postId}로 이동`,
      );
    } else {
      console.log(`${boardType}의 ${communityId}커뮤니티의 ${postId}로 이동`);
    }
  };
  return (
    <article
      className="flex h-[65px] w-full cursor-pointer flex-col justify-center"
      onClick={handleClickPostCard}>
      <aside className="mb-0.5">
        <BoardTypeLabel
          boardType={boardType}
          boardName={isFanChannel ? influencerName || '' : communityName || ''}
          iconSize={isFanChannel ? 18 : 16}
          className="gap-x-[3px] sub1-m"
        />
      </aside>
      <h1 className="mb-[7px] truncate body2-r">{content}</h1>
      <footer className="flex w-full items-center justify-between">
        <InteractionStats
          boardCardType={isPopular ? BOARD_CARD_TYPE.POPULAR_POST : BOARD_CARD_TYPE.POST}
          {...{ likesCount: likeCount, dislikesCount: 0, commentsCount: commentCount }}
        />
        <time className="text-neutral-400 sub2-m">
          {formatDateToYYMMDD(parseISOToDate(crDate))}
        </time>
      </footer>
    </article>
  );
};

export default TextPostCard;
