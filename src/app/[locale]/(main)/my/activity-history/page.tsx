import { Metadata } from 'next';

import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import SlideBarTabs from '@/components/common/SlideBarTabs';

import MyHistoryProfile from './_components/MyHistoryProfile';

import { commentData, postData, reviewData } from '@/constants/testData';
import ReviewHistory from '@/components/domain/user/activityHistory/ReviewHistory';
import PostHistory from '@/components/domain/user/activityHistory/PostHistory';
import CommentHistory from '@/components/domain/user/activityHistory/CommentHistory';

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

export default function MyActivityHistoryPage() {
  const t = useTranslations('my_activity_history_page');
  const userData = {
    userNickName: '닉네임이다',
    imageSrc: '', // 비워질 경우, fallback으로 이름 첫글자 표시
    introduction:
      '한줄소개 텍스트 한줄소개 텍스트 한줄소개 텍스트 한줄소개 텍스트 한줄소개 텍스트 한줄소개 텍스트 한줄소개 텍스트 한줄소개',
    email: '0000000@gmail.com',
  };

  const tabs = [
    {
      value: '1',
      label: t('내 한줄 리뷰'),
      content: <ReviewHistory reviews={reviewData} />,
    },
    {
      value: '2',
      label: t('내 글'),
      content: <PostHistory posts={postData} />,
    },
    {
      value: '3',
      label: t('내 댓글'),
      content: <CommentHistory comments={commentData} />,
    },
  ];

  return (
    <div className="m-5 h-[calc(100%-130px)] pb-20 pt-[35px]">
      <section aria-label="유저 정보" className="h-[54px]">
        <MyHistoryProfile {...userData} />
      </section>
      <section aria-label="활동 내역 탭" className="h-full pt-5">
        <SlideBarTabs tabs={tabs} defaultValue="1" />
      </section>
    </div>
  );
}
