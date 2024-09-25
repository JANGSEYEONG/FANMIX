import { useTranslations } from 'next-intl';

import SlideBarTabs from '@/components/common/SlideBarTabs';

import PopularPost from './PopularPost';
import PopularReview from './PopularReview';

import { postData, reviewData } from '@/constants/testData';

const PopularContentTabs = () => {
  const t = useTranslations('main_page');

  // #20240921.syjang, tabs 내부 데이터를 부모로부터 받아올지, 여기서 데이터 땡겨올지 고민 필요
  const tabs = [
    {
      value: '1',
      label: t('인기 글'),
      content: (
        <div className="mt-6 w-full">
          <PopularPost posts={postData} />
        </div>
      ),
    },
    {
      value: '2',
      label: t('인기 리뷰'),
      content: <PopularReview reviews={reviewData} />,
    },
  ];
  return <SlideBarTabs tabs={tabs} defaultValue="1" />;
};

export default PopularContentTabs;
