import { Separator } from '@/components/ui/separator';
import TextPostCard, { type TextPostCardProps } from '@/components/domain/board/TextPostCard';

interface PopularPostProps {
  posts: TextPostCardProps[];
}
const PopularPost = ({ posts }: PopularPostProps) => {
  return (
    <ul className="mt-6 w-full gap-4 flex-col-center">
      {posts.map((post) => (
        <li key={post.postId} className="w-full">
          <TextPostCard {...post} isPopular />
          <Separator className="mt-4 h-[0.7px] bg-neutral-600" />
        </li>
      ))}
    </ul>
  );
};

export default PopularPost;
