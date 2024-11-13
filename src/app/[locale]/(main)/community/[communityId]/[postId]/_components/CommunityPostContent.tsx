import PostContent from '@/components/domain/board/post/PostContent';
import PostInteractionArea from '@/components/domain/board/post/PostInteractionArea';

interface CommunityPostContentProps {
  communityId: number;
  postId: number;
}

const CommunityPostContent = ({ communityId, postId }: CommunityPostContentProps) => {
  console.log(communityId, postId);
  const content = {
    userId: 1,
    title: '글제글제목글제목글제목글제목글제목글제목글제목목',
    content: '텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
    userNickName: '작성한 유저 이름이다아',
    postDate: '24.09.05 00:00:00',
    imgUrl: '',
    profileImgUrl: '',
    communityName: '게임',
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
export default CommunityPostContent;
