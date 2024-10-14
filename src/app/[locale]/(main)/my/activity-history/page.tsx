import { Metadata } from 'next';

import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import SlideBarTabs from '@/components/common/SlideBarTabs';

import MyHistoryProfile from './_components/MyHistoryProfile';

import MyReviewHistory from './_components/MyReviewHistory';
// import PostHistory from '@/components/domain/user/activityHistory/PostHistory';
// import CommentHistory from '@/components/domain/user/activityHistory/CommentHistory';
import MessageText from '@/components/common/MessageText';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('활동내역'),
  };
}

const TAB_TYPES = {
  MY_REVIEWS: 'MY_REVIEWS',
  MY_POSTS: 'MY_POSTS',
  MY_COMMENT: 'MY_COMMENT',
} as const;

export default function MyActivityHistoryPage() {
  const t = useTranslations('my_activity_history_page');
  const tabs = [
    {
      value: TAB_TYPES.MY_REVIEWS,
      label: t('내 한줄 리뷰'),
      content: <MyReviewHistory />,
    },
    {
      value: TAB_TYPES.MY_POSTS,
      label: t('내 글'),
      content: <MessageText className="h-full" message={t('커뮤니티 기능은 준비 중이에요')} />,
      // content: <PostHistory />,
    },
    {
      value: TAB_TYPES.MY_COMMENT,
      label: t('내 댓글'),
      content: <MessageText className="h-full" message={t('커뮤니티 기능은 준비 중이에요')} />,
      // content: <CommentHistory />,
    },
  ];

  return (
    <div className="m-5 h-[calc(100%-130px)] pb-20 pt-[35px]">
      <section aria-label="유저 정보" className="h-[54px]">
        <MyHistoryProfile />
      </section>
      <section aria-label="활동 내역 탭" className="h-full pt-5">
        <SlideBarTabs tabs={tabs} defaultValue={TAB_TYPES.MY_REVIEWS} />
      </section>
    </div>
  );
}
