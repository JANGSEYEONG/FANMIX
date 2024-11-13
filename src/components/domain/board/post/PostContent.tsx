import UserAvatar from '@/components/domain/user/UserAvatar';
import UserActivityHistoryLink from '@/components/domain/user/UserActivityHistoryLink';

interface PostContentProps {
  userId: number;
  communityId: number;
  title: string;
  content: string;
  userNickName: string;
  postDate: string;
  imgUrl?: string;
  profileImgUrl?: string;
  communityName?: string;
}
const PostContent = ({
  userId,
  title,
  content,
  userNickName,
  postDate,
  imgUrl,
  profileImgUrl,
  communityName,
}: PostContentProps) => {
  return (
    <div className="mt-[30px]">
      <div className="flex justify-between">
        <UserActivityHistoryLink userId={userId}>
          <div className="flex items-center gap-x-2">
            <UserAvatar size={40} profileImgUrl={profileImgUrl} userNickName={userNickName} />
            <div className="flex flex-col gap-y-0.5">
              <div className="text-neutral-300 body3-m">{userNickName}</div>
              <time className="text-neutral-400 sub1-r">{postDate}</time>
            </div>
          </div>
        </UserActivityHistoryLink>
        {communityName && (
          <div className="h-fit w-fit rounded-full bg-orange-600 px-2.5 py-0.5 text-white sub1-m">
            {communityName}
          </div>
        )}
      </div>
      <h2 className="mt-[15px] body1-sb">{title}</h2>
      <p className="mt-2.5 body2-r">{content}</p>
      {imgUrl && <div className="mt-[25px] aspect-square w-full bg-slate-700">이미지</div>}
    </div>
  );
};

export default PostContent;
