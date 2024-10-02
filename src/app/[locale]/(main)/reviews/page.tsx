import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { Separator } from '@/components/ui/separator';
import ImageReviewCard from './_components/ImageReviewCard';

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

// 메인 페이지
export default function ReviewIndexPage() {
  const data = {
    influencerId: 'inf123456',
    reviewerId: 'rev789012',
    influencerName: '빵먹다살찐떡',
    influencerImageUrl: '/assets/images/test/alganzi.png',
    reviewrNickName: '맛있는리뷰어',
    reviewContent:
      '언니 단발이 너무 귀여워요! 요새 많이 바쁘신가봐요. 그래도 영상 올라올 때마다 늘 기다리고 있어요. 앞으로도 좋은 콘텐츠 기대할게요!',
    reviewDate: '2024-03-15T09:30:00Z',
    contentsRating: 9,
    communicationRating: 8,
    trustRating: 10,
    likesCount: 42,
    dislikesCount: 3,
    commentsCount: 7,
  };
  return (
    <div className="w-full pb-20 pt-[35px] flex-col-center">
      <section aria-label="전체 한줄리뷰 리스트" className="mt-[30px] w-full px-5">
        <div className="mb-[15px] flex items-center gap-x-[15px] body3-r">
          <button className="text-lime-400 body3-m">최신순</button>
          <button className="text-neutral-400">추천순</button>
        </div>
        <ul>
          <li>
            <ImageReviewCard {...data} />
            <Separator className="my-5 h-[1px] bg-neutral-800" />
          </li>
        </ul>
      </section>
    </div>
  );
}
