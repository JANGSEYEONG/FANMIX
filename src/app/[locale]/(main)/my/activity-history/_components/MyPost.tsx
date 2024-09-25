import { Fragment } from 'react';
import { Separator } from '@/components/ui/separator';
import TextPostCard, { type TextPostCardProps } from '@/components/domain/board/TextPostCard';
import { useTranslations } from 'next-intl';

interface MyPostProps {
  posts: TextPostCardProps[];
}
const MyPost = ({ posts }: MyPostProps) => {
  const t = useTranslations('my_activity_history_page');

  return (
    <div className="h-full w-full overflow-y-auto pt-5 scrollbar-hide-smooth">
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
      <div className="mb-8 mt-7 text-center text-neutral-500 body3-r">
        {t('모든 내용을 확인했습니다')}
      </div>
    </div>
  );
};

export default MyPost;
