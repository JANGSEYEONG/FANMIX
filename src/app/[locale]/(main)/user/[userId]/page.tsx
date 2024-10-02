import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import UserProfile from './_components/UserProfile';
import OnePickInfluencer from '@/components/domain/influencer/OnePickInfluencer';
import CommentHistory from '@/components/domain/user/activityHistory/CommentHistory';
import PostHistory from '@/components/domain/user/activityHistory/PostHistory';
import ReviewHistory from '@/components/domain/user/activityHistory/ReviewHistory';
import SlideBarTabs from '@/components/common/SlideBarTabs';

import { commentData, postData, reviewData } from '@/constants/testData';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('유저 정보'),
  };
}

export default function UserProfilePage({ params: { userId } }: { params: { userId: string } }) {
  console.log(userId);
  const t = useTranslations('user_page');

  const onePickData = {
    influencerId: '3',
    communityId: '3',
    influencerName: '으뜸언니',
    influencerImageUrl: '',
    isOthersPick: false,
  };

  const userData = {
    userNickName: '닉네임이다',
    imageSrc: '', // 비워질 경우, fallback으로 이름 첫글자 표시
    introduction:
      '한줄소개 텍스트 한줄소개 텍스트 한줄소개 텍스트 한줄소개 텍스트 한줄소개 텍스트 한줄소개 텍스트 한줄소개 텍스트 한줄소개',
  };

  const tabs = [
    {
      value: '1',
      label: t('한줄 리뷰'),
      content: <ReviewHistory reviews={reviewData} />,
    },
    {
      value: '2',
      label: t('글'),
      content: <PostHistory posts={postData} />,
    },
    {
      value: '3',
      label: t('댓글'),
      content: <CommentHistory comments={commentData} />,
    },
  ];

  return (
    <div className="h-full w-full overflow-y-auto pb-20 pt-[35px] scrollbar-hide-smooth">
      <section
        aria-label={`${userData.userNickName}의 프로필`}
        className="sticky top-0 z-10 bg-black px-5 pb-4 pt-5">
        <UserProfile {...userData} />
      </section>
      <section aria-label={`${userData.userNickName}의 한줄소개`} className="mx-5 mb-8">
        <p className="body3-r">{userData.introduction}</p>
      </section>
      <section aria-label={`${userData.userNickName}의 원픽 인플루언서`} className="mb-6">
        <OnePickInfluencer {...onePickData} isOthersPick />
      </section>
      <section
        aria-label={`${userData.userNickName}의 활동내역`}
        className="sticky top-0 mx-5 h-[calc(100%-110px)]">
        <SlideBarTabs tabs={tabs} defaultValue="1" />
      </section>
    </div>
  );
}
