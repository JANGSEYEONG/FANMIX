import { Fragment } from 'react';
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
      <ul className="flex w-full flex-col items-center gap-4">
        {posts.map((post) => (
          <Fragment key={post.postId}>
            <li className="w-full">
              <TextPostCard {...post} />
            </li>
            <Separator className="h-[0.7px] bg-neutral-600" />
          </Fragment>
        ))}
      </ul>
      <p className="mb-8 mt-7 text-center text-neutral-500 body3-r">
        {t('모든 내용을 확인했어요')}
      </p>
    </div>
  );
};

export default PostHistory;
