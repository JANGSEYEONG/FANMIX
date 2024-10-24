import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';
import ErrorHandlingWrapper from '@/components/common/error/ErrorHandlingWrapper';

import ReviewDetailContent from './_components/ReviewDetailContent';
import LikeDislikeButtons from './_components/LikeDislikeButtons';
import ReviewCommentList from './_components/ReviewCommentList';
import ReviewCommentForm from './_components/ReviewCommentForm';
import { getInfluencerReviewDetailWithCommentsData } from '@/services/serverFetch/reviewServerService';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('한줄 리뷰'),
  };
}

export default async function InfluencerReviewPage({
  params: { locale, influencerId, reviewId },
}: {
  params: { locale: string; influencerId: string; reviewId: string };
}) {
  // 리뷰 상세 + 코멘트 리스트, 서버에서 default로 깔아둘 데이터 로딩
  const { data: reviewData } = await getInfluencerReviewDetailWithCommentsData(
    influencerId,
    reviewId,
  );
  const t = await getTranslations({ locale, namespace: 'review_page' });
  return (
    <div className="flex h-full flex-col pb-[75px] pt-[55px]">
      <section aria-label="리뷰 상세 내용" className="mb-[15px] flex-shrink-0">
        <ReviewDetailContent influencerId={parseInt(influencerId)} {...reviewData.review} />
      </section>
      <section aria-label="리뷰 추천, 비추천" className="mb-[25px] flex-shrink-0">
        <LikeDislikeButtons
          influencerId={parseInt(influencerId)}
          reviewId={parseInt(reviewId)}
          initialIsLiked={reviewData.review.isLiked}
          initialIsDisliked={reviewData.review.isDisliked}
        />
      </section>
      <section aria-label="리뷰 댓글 리스트" className="flex-1 bg-neutral-900 pb-[75px]">
        <ErrorHandlingWrapper
          errorFallbackMessage={t('댓글을 불러오는데 문제가 발생했어요 다시 시도해 주세요')}
          errorClassName="h-full flex-center"
          suspenseFallback={<ComponentSpinner className="h-full flex-center" />}>
          <ReviewCommentList
            influencerId={parseInt(influencerId)}
            reviewId={parseInt(reviewId)}
            defaultCommentList={reviewData.commentList}
          />
        </ErrorHandlingWrapper>
      </section>
      <footer className="absolute bottom-0 h-[75px] w-full fanmix-gradient">
        <ReviewCommentForm influencerId={parseInt(influencerId)} reviewId={parseInt(reviewId)} />
      </footer>
    </div>
  );
}
