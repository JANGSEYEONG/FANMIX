'use client';

import { useTranslations } from 'next-intl';
import { useAuthStore } from '@/stores/authStore';
import { useMyReview } from '../_hooks/useMyReview';

import ReviewView from './ReviewView';
import ReviewForm from './ReviewForm';
import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';

import { REVIEW_MODE } from '@/types/domain/reviewType';

const LoadingView = () => (
  <div className="mt-10 w-full">
    <ComponentSpinner />
  </div>
);
interface StatusMessageProps {
  message: string;
}
const StatusMessage = ({ message }: StatusMessageProps) => (
  <p className="mt-10 w-full text-neutral-500 flex-center body3-r">{message}</p>
);

interface MyReviewProps {
  influencerId: number;
}
const MyReview = ({ influencerId }: MyReviewProps) => {
  const t = useTranslations('influencer_reviews_page');

  // 1. 로그인 상태인지 아닌지 판단하기
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  // 2. useQuery로 내 최신 댓글 가져오고 상태 관리하기
  const {
    myLatestReviewData,
    setMyLatestReviewData,
    reviewMode,
    setReviewMode,
    isError,
    isLoading,
  } = useMyReview(influencerId);

  if (isLoading) return <LoadingView />;
  if (!isLoggedIn)
    return <StatusMessage message={t('리뷰 작성 기능은 로그인 후 이용할 수 있어요')} />;
  if (isError)
    return <StatusMessage message={t('내 최근 한줄리뷰를 가져오는데 문제가 생겼어요')} />;

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
