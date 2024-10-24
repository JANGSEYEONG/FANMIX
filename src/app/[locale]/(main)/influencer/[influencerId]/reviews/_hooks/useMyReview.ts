import { useEffect, useState } from 'react';

import { useMyLatestReviewForInfluencer } from '@/hooks/queries/useReviewService';
import { REVIEW_MODE, type ReviewMode, type MyLatestReview } from '@/types/domain/reviewType';

export const useMyReview = (influencerId: number) => {
  const { data, isSuccess } = useMyLatestReviewForInfluencer(influencerId);
  const [myLatestReviewData, setMyLatestReviewData] = useState<MyLatestReview | null>(null);
  const [reviewMode, setReviewMode] = useState<ReviewMode>(REVIEW_MODE.VIEW);

  // 최신 리뷰 결과에 따라 reviewMode 바꿔주기
  useEffect(() => {
    if (isSuccess) {
      if (data?.data) {
        // 최근 리뷰가 있음 -> 15일이 지났든, 안지났든 뷰 모드로 + 내 리뷰 데이터 저장
        setMyLatestReviewData(data.data);
        setReviewMode(REVIEW_MODE.VIEW);
      } else {
        // 최근 리뷰가 없음 -> 폼 모드
        setMyLatestReviewData(null);
        setReviewMode(REVIEW_MODE.FORM_CREATE);
      }
    } else {
      setMyLatestReviewData(null);
      setReviewMode(REVIEW_MODE.FORM_CREATE);
    }
  }, [isSuccess, data, setMyLatestReviewData, setReviewMode]);

  return {
    myLatestReviewData,
    setMyLatestReviewData,
    reviewMode,
    setReviewMode,
  };
};
