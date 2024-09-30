import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import ReviewDetailContent from './_components/ReviewDetailContent';
import LikeDislikeButtons from './_components/LikeDislikeButtons';
import ReviewCommentList from './_components/ReviewCommentList';
import CommentForm from './_components/CommentForm';

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

export default function InfluencerReviewPage({
  params: { influencerId, reviewId },
}: {
  params: { influencerId: string; reviewId: string };
}) {
  console.log(`${influencerId}, 인플루언서 한줄리뷰, ${reviewId} 상세 페이지`);
  return (
    <div className="pb-[75px] pt-[55px]">
      <section aria-label="리뷰 상세 내용" className="mb-[15px]">
        <ReviewDetailContent />
      </section>
      <section aria-label="리뷰 추천, 비추천" className="mb-[25px]">
        <LikeDislikeButtons reviewId="3" initialIsLiked={false} initialIsDisliked={false} />
      </section>
      <section aria-label="리뷰 댓글 리스트">
        <ReviewCommentList />
      </section>
      <footer className="absolute bottom-0 h-[75px] w-full fanmix-gradient">
        <CommentForm />
      </footer>
    </div>
  );
}
