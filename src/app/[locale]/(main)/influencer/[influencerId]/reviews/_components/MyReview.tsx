'use client';

import { useTranslations } from 'next-intl';
import { useAuthStore } from '@/stores/authStore';
import { useMyReview } from '../_hooks/useMyReview';

import MessageText from '@/components/common/MessageText';

import ReviewView from './ReviewView';
import ReviewForm from './ReviewForm';

import { REVIEW_MODE } from '@/types/domain/reviewType';

interface MyReviewProps {
  influencerId: number;
}
const MyReview = ({ influencerId }: MyReviewProps) => {
  const t = useTranslations('influencer_reviews_page');

  // 1. 로그인 상태인지 아닌지 판단하기
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  // 2. useQuery로 내 최신 댓글 가져오고 상태 관리하기
  const { myLatestReviewData, setMyLatestReviewData, reviewMode, setReviewMode } =
    useMyReview(influencerId);

  if (!isLoggedIn)
    return (
      <MessageText
        className="mt-10 w-full"
        message={t('리뷰 작성 기능은 로그인 후 이용할 수 있어요')}
      />
    );

  return (
    <div>
      {reviewMode === REVIEW_MODE.VIEW && myLatestReviewData ? (
        <ReviewView
          influencerId={influencerId}
          setReviewMode={setReviewMode}
          setMyLatestReviewData={setMyLatestReviewData}
          reviewData={myLatestReviewData}
        />
      ) : (
        <ReviewForm
          influencerId={influencerId}
          reviewMode={reviewMode}
          setReviewMode={setReviewMode}
          setMyLatestReviewData={setMyLatestReviewData}
          defaultReviewData={myLatestReviewData}
        />
      )}
    </div>
  );
};

export default MyReview;
