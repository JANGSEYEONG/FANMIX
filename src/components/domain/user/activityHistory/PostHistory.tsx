import { useTranslations } from 'next-intl';

import { Separator } from '@/components/ui/separator';
import TextPostCard, { type TextPostCardProps } from '@/components/domain/board/TextPostCard';

interface PostHistoryProps {
  posts: TextPostCardProps[];
}
const PostHistory = ({ posts }: PostHistoryProps) => {
  const t = useTranslations('my_activity_history_page');

  return (
    <div className="h-full w-full overflow-y-auto pb-8 pt-5 scrollbar-hide-smooth">
      <ul className="flex flex-col">
        {posts.map((post) => (
          <li key={post.postId} className="w-full">
            <TextPostCard {...post} />
            <Separator className="my-[15px] h-[0.7px] bg-neutral-600" />
          </li>
        ))}
      </ul>
      <p className="mb-8 mt-7 text-center text-neutral-500 body3-r">
        {t('모든 내용을 확인했어요')}
      </p>
    </div>
  );
};

export default PostHistory;
