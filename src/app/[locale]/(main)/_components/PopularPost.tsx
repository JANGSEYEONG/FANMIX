import { Fragment } from 'react';
import { Separator } from '@/components/ui/separator';
import TextPostCard, { type TextPostCardProps } from '@/components/domain/board/TextPostCard';

interface PopularPostProps {
  posts: TextPostCardProps[];
}
const PopularPost = ({ posts }: PopularPostProps) => {
  return (
    <ul className="mt-6 w-full gap-4 flex-col-center">
      {posts.map((post) => (
        <Fragment key={post.postId}>
          <li className="w-full">
            <TextPostCard {...post} isPopular />
          </li>
          <Separator className="h-[0.7px] bg-neutral-600" />
        </Fragment>
      ))}
    </ul>
  );
};

export default PopularPost;
