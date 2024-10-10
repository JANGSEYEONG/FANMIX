import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import SlideBarTabs from '@/components/common/SlideBarTabs';

import PopularReview from './PopularReview';
const PopularPost = dynamic(() => import('./PopularPost'));

import type { ImageReviewCardData } from '@/types/domain/reviewType';
import type { TextPostCardData } from '@/types/domain/communityType';

const TAB_TYPES = {
  POPULAR_REVIEWS: 'POPULAR_REVIEWS',
  POPULAR_POSTS: 'POPULAR_POSTS',
} as const;

interface PopularContentTabsProps {
  reviews: ImageReviewCardData[];
  posts: TextPostCardData[];
}
const PopularContentTabs = ({ reviews, posts }: PopularContentTabsProps) => {
  const t = useTranslations('main_page');

  // #20240921.syjang, tabs 내부 데이터를 부모로부터 받아올지, 여기서 데이터 땡겨올지 고민 필요
  const tabs = [
    {
      value: TAB_TYPES.POPULAR_REVIEWS,
      label: t('인기 리뷰'),
      content: <PopularReview reviews={reviews} />,
    },
    {
      value: TAB_TYPES.POPULAR_POSTS,
      label: t('인기 글'),
      content: (
        <div className="mt-6 w-full">
          <PopularPost posts={posts} />
        </div>
      ),
    },
  ];
  return <SlideBarTabs tabs={tabs} defaultValue={TAB_TYPES.POPULAR_REVIEWS} />;
};

export default PopularContentTabs;
