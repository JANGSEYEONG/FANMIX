'use client';

import { useState } from 'react';

import ReviewView from './ReviewView';
import ReviewForm from './ReviewForm';

import { REVIEW_MODE, type ReviewMode } from '@/types/domain/influencerType';

const MyReview = () => {
  const [reviewMode, setReviewMode] = useState<ReviewMode>(REVIEW_MODE.VIEW);

  return (
    <div>
      {reviewMode === REVIEW_MODE.VIEW ? (
        <ReviewView setReviewMode={setReviewMode} />
      ) : (
        <ReviewForm setReviewMode={setReviewMode} />
      )}
    </div>
  );
};

export default MyReview;
