'use client';

// import CreateCommentForm from '@/components/domain/board/CreateCommentForm';

interface CommunityPostCommentFormProps {
  communityId: number;
  postId: number;
}

const CommunityPostCommentForm = ({ communityId, postId }: CommunityPostCommentFormProps) => {
  console.log(communityId, postId);
  return (
    <section
      aria-label="커뮤니티 댓글 작성"
      className="absolute bottom-0 h-[75px] w-full fanmix-gradient">
      {/* <CreateCommentForm onSubmit={() => {}} useFormRegister={{}} isValid={true} /> */}
    </section>
  );
};

export default CommunityPostCommentForm;
