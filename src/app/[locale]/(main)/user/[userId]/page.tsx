import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import MessageText from '@/components/common/MessageText';
import SlideBarTabs from '@/components/common/SlideBarTabs';

import UserProfile from './_components/UserProfile';
import OnePickInfluencer from '@/components/domain/influencer/OnePickInfluencer';

import UserReviewHistory from './_components/UserReviewHistory';
// import CommentHistory from '@/components/domain/user/activityHistory/CommentHistory';
// import PostHistory from '@/components/domain/user/activityHistory/PostHistory';

import { getUserOnePickInfluencerData } from '@/services/serverFetch/influencerServerService';

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

const TAB_TYPES = {
  USER_REVIEWS: 'USER_REVIEWS',
  USER_POSTS: 'USER_POSTS',
  USER_COMMENT: 'USER_COMMENT',
} as const;

export default async function UserProfilePage({
  params: { locale, userId },
}: {
  params: { locale: string; userId: string };
}) {
  const t = await getTranslations({ locale, namespace: 'user_page' });
  const { data: userOnePickInfluencerData } = await getUserOnePickInfluencerData({
    userId: parseInt(userId),
  });

  const tabs = [
    {
      value: TAB_TYPES.USER_REVIEWS,
      label: t('한줄 리뷰'),
      content: <UserReviewHistory userId={parseInt(userId)} />,
    },
    {
      value: TAB_TYPES.USER_POSTS,
      label: t('글'),
      content: <MessageText className="h-full" message={t('커뮤니티 기능은 준비 중이에요')} />,
      // content: <PostHistory />,
    },
    {
      value: TAB_TYPES.USER_COMMENT,
      label: t('댓글'),
      content: <MessageText className="h-full" message={t('커뮤니티 기능은 준비 중이에요')} />,
      // content: <CommentHistory />,
    },
  ];

  return (
    <div className="h-full w-full overflow-y-auto pb-20 pt-[35px] scrollbar-hide-smooth">
      <UserProfile userId={parseInt(userId)} />
      <section aria-label="유저의 원픽 인플루언서" className="mb-6">
        {userOnePickInfluencerData && (
          <OnePickInfluencer
            {...userOnePickInfluencerData}
            communityId={userOnePickInfluencerData.fanChannelId || null}
            isOthersPick
          />
        )}
      </section>
      <section aria-label="유저의 활동 내역" className="sticky top-0 mx-5 h-[calc(100%-110px)]">
        <SlideBarTabs tabs={tabs} defaultValue={TAB_TYPES.USER_REVIEWS} />
      </section>
    </div>
  );
}
