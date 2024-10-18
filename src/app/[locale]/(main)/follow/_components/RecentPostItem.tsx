import { Link } from '@/i18n/routing';
import { VscComment } from 'react-icons/vsc';

// interface RecentPostItemProps {
//   communityId: number;
//   postId: number;
//   title: string;
//   commentCount: number;
//   crDate: string;
// }
const RecentPostItem = () => {
  return (
    <Link href={'/community/3/5'}>
      <div className="flex items-center justify-between py-2.5 pl-5 pr-4">
        <div className="flex items-center gap-x-2.5">
          <h3 className="text-neutral-100 sub1-r">커뮤니티의 글 제목입니다롱이</h3>
          <span
            aria-label="댓글 수"
            className="flex items-center gap-x-0.5 text-neutral-400 sub2-m">
            00
            <VscComment aria-hidden="true" className="h-3 w-3" />
          </span>
        </div>
        <time className="ml-2 flex-shrink-0 text-neutral-400 sub2-m">00분 전</time>
      </div>
    </Link>
  );
};

export default RecentPostItem;
