import { Link } from '@/i18n/routing';
import { LiaBookmark } from 'react-icons/lia';
import { VscChevronRight } from 'react-icons/vsc';
import { Separator } from '@/components/ui/separator';

import RecentPostItem from './RecentPostItem';

// interface FollowCommunityCardProps {
//   communityId: number;
//   communityName: string;
//   postList: { postId: number; title: string; crDate: string; commentCount: number }[];
// }
const FollowCommunityCard = () => {
  return (
    <article className="flex flex-col gap-y-3">
      <header className="flex items-center justify-between">
        <h2 className="body2-sb">
          <Link href={'/community/3'} className="flex items-center gap-x-1">
            게임 커뮤니티
            <VscChevronRight className="h-5 w-5 text-neutral-300" />
          </Link>
        </h2>
        <button
          aria-label="팔로우 토글"
          className="h-[26px] w-[26px] flex-shrink-0 rounded-full bg-orange-600 flex-center hover:scale-105">
          <LiaBookmark className="h-5 w-5 text-white transition-colors duration-200" />
        </button>
      </header>
      <ul className="flex flex-col rounded-[5px] bg-neutral-900 py-2">
        <li>
          <RecentPostItem />
          <Separator className="h-[1px] bg-black" />
        </li>
        <li>
          <RecentPostItem />
          <Separator className="h-[1px] bg-black" />
        </li>
        <li>
          <RecentPostItem />
        </li>
      </ul>
    </article>
  );
};

export default FollowCommunityCard;
