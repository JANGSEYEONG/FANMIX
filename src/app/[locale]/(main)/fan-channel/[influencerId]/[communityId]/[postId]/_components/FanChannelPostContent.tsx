import PostContent from '@/components/domain/board/post/PostContent';
import PostInteractionArea from '@/components/domain/board/post/PostInteractionArea';

interface FanChannelPostContentProps {
  influencerId: number;
  communityId: number;
  postId: number;
}

const FanChannelPostContent = ({ communityId, postId }: FanChannelPostContentProps) => {
  console.log(communityId, postId);
  const content = {
    userId: 1,
    title: '글제글제목글제목글제목글제목글제목글제목글제목목',
    content: '텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
    userNickName: '작성한 유저 이름이다아',
    postDate: '24.09.05 00:00:00',
    imgUrl: '',
    profileImgUrl: '',
  };
  const stat = {
    likesCount: 0,
    dislikesCount: 1000,
    commentsCount: 10000,
    viewCount: 3322,
  };
  return (
    <section className="flex-shrink-0 px-5">
      <PostContent communityId={communityId} {...content} />
      <PostInteractionArea {...stat} />
    </section>
  );
};
export default FanChannelPostContent;
