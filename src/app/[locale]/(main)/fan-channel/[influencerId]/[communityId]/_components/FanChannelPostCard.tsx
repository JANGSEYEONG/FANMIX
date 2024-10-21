import Image from 'next/image';

import { cn } from '@/lib/utils';
import { Link } from '@/i18n/routing';

import { LiaEllipsisVSolid } from 'react-icons/lia';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import ViewStat from '@/components/domain/board/ViewStat';
import InteractionStats from '@/components/domain/board/InteractionStats';
import UserActivityHistoryLink from '@/components/domain/user/UserActivityHistoryLink';

import { BOARD_CARD_TYPE } from '@/types/domain/boardType';

interface FanChannelPostCardProps {
  postImageUrl?: string;
  isMyPost: boolean;
}

const FanChannelPostCard = ({ postImageUrl, isMyPost }: FanChannelPostCardProps) => {
  return (
    <Link href="/fan-channel/17/10/3" className="relative">
      <article className={cn('flex flex-col gap-y-3 py-5', isMyPost && 'bg-orange-700/15')}>
        <header className="flex items-center justify-between">
          <UserActivityHistoryLink userId={1} className="flex w-fit items-center gap-x-2">
            <Avatar className="h-10 w-10 flex-shrink-0">
              <AvatarImage src={''} alt={`유저 ${'유저이름이다아'}의 프로필 사진`} />
              <AvatarFallback className="bg-orange-300/40 h1-sb">{'작'}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-y-0.5">
              <div className={cn('text-neutral-300 body3-m', isMyPost && 'text-orange-500')}>
                작성한 유저 이름이다아
              </div>
              <time className="text-neutral-400 sub1-r">24.09.05 00:00:00</time>
            </div>
          </UserActivityHistoryLink>
          {isMyPost && <LiaEllipsisVSolid className="h-[18px] w-[18px] hover:scale-125" />}
        </header>
        <div className="flex items-center gap-x-4">
          <div className="flex flex-col gap-y-1.5">
            <h2 className="line-clamp-1 body1-sb">
              팬채널 글 제목 제목그렞목글제제목그렞목글제글제목그렞목글제
            </h2>
            <p className="h-15 line-clamp-3 text-neutral-200 body3-r">
              글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영
              글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영글내영
            </p>
          </div>
          {postImageUrl && (
            <div className="relative h-[90px] w-[90px] flex-shrink-0">
              <Image
                priority
                src={'/assets/images/test/alganzi.png'}
                alt={`${'글 제목'}에 포함된 이미지`}
                fill
                className="object-cover"
                sizes="90px"
              />
            </div>
          )}
        </div>
        <footer className="flex items-center justify-between">
          <ViewStat viewCount={1000} />
          <InteractionStats
            boardCardType={BOARD_CARD_TYPE.POST}
            {...{ likesCount: 3000, dislikesCount: 10, commentsCount: 100 }}
          />
        </footer>
      </article>
      {isMyPost && (
        <>
          <div className="absolute -left-5 top-0 h-full w-5 bg-orange-700/15" aria-hidden="true" />
          <div className="absolute -right-5 top-0 h-full w-5 bg-orange-700/15" aria-hidden="true" />
        </>
      )}
    </Link>
  );
};

export default FanChannelPostCard;
