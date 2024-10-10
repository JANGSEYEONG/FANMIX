import { useTranslations } from 'next-intl';

import { Separator } from '@/components/ui/separator';
import TextPostCard from '@/components/domain/board/TextPostCard';
import type { TextPostCardData } from '@/types/domain/communityType';

interface PopularPostProps {
  posts: TextPostCardData[];
}
const PopularPost = ({ posts }: PopularPostProps) => {
  const t = useTranslations('main_page');

  return posts.length === 0 ? (
    <div className="h-40 text-neutral-400 flex-center body3-r">
      <p>{t('아직 인기 글이 없어요')}</p>
    </div>
  ) : (
    <ul className="mt-6 w-full gap-4 flex-col-center">
      {posts.map((post) => (
        <li key={post.postId} className="w-full">
          <TextPostCard postData={post} isPopular />
          <Separator className="mt-4 h-[0.7px] bg-neutral-600" />
        </li>
      ))}
    </ul>
  );
};

export default PopularPost;
