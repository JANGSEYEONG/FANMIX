import { useTranslations } from 'next-intl';

import { Separator } from '@/components/ui/separator';

import MessageText from '@/components/common/MessageText';
import TextPostCard from '@/components/domain/board/TextPostCard';

import type { TextPostCardData } from '@/types/domain/communityType';

interface PostHistoryProps {
  posts: TextPostCardData[];
}
const PostHistory = ({ posts }: PostHistoryProps) => {
  const t = useTranslations('my_activity_history_page');

  return (
    <div className="h-full w-full overflow-y-auto pb-8 pt-5 scrollbar-hide-smooth">
      <ul className="flex flex-col">
        {posts.map((post) => (
          <li key={post.postId} className="w-full">
            <TextPostCard postData={post} />
            <Separator className="my-[15px] h-[0.7px] bg-neutral-600" />
          </li>
        ))}
      </ul>
      <MessageText className="mb-8 mt-7" message={t('모든 내용을 확인했어요')} />
    </div>
  );
};

export default PostHistory;
