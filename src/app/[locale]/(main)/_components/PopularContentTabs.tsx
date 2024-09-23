import { useTranslations } from 'next-intl';

import SlideBarTabs from '@/components/common/SlideBarTabs';

import PopularPost from './PopularPost';
import PopularReview from './PopularReview';

import { BOARD_TYPE } from '@/types/domain/board';

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

// 테스트 데이터.
const reviewData = [
  {
    reviewId: '1',
    influencer: {
      influencerId: '3',
      name: '빵먹다 살찐 떡',
      imageSrc: '/assets/images/test/alganzi.png',
      isVerified: true,
    },
    rating: { contentScore: 10, communicationScore: 10, trustworthinessScore: 9 }, // 점수 평가
    content: '언니 단발 귀여워 언니 단발 귀여워 언니 단발 귀여워 언니 단발 귀여워', // 한줄리뷰 내용
    interaction: { likesCount: 33, dislikesCount: 1, commentsCount: 100, createdAt: new Date() },
  },
  {
    reviewId: '2',
    influencer: {
      influencerId: '3',
      name: '빵먹다 살찐 떡',
      imageSrc: '/assets/images/test/alganzi.png',
      isVerified: false,
    },
    rating: { contentScore: 10, communicationScore: 10, trustworthinessScore: 9 }, // 점수 평가
    content: '언니 단발 귀여워', // 한줄리뷰 내용
    interaction: {
      likesCount: 33,
      dislikesCount: 1,
      commentsCount: 100,
      createdAt: new Date(),
    },
  },
  {
    reviewId: '3',
    influencer: {
      influencerId: '3',
      name: '빵먹다 살찐 떡',
      imageSrc: '/assets/images/test/alganzi.png',
      isVerified: true,
    },
    rating: { contentScore: 10, communicationScore: 10, trustworthinessScore: 9 }, // 점수 평가
    content: '언니 단발 귀여워 언니 단발 귀여워 언니 단발 귀여워 언니 단발 귀여워', // 한줄리뷰 내용
    interaction: { likesCount: 33, dislikesCount: 1, commentsCount: 100, createdAt: new Date() },
  },
  {
    reviewId: '4',
    influencer: {
      influencerId: '3',
      name: '빵먹다 살찐 떡',
      imageSrc: '/assets/images/test/alganzi.png',
      isVerified: false,
    },
    rating: { contentScore: 10, communicationScore: 10, trustworthinessScore: 9 }, // 점수 평가
    content: '언니 단발 귀여워 언니 단발 귀여워', // 한줄리뷰 내용
    interaction: { likesCount: 33, dislikesCount: 1, commentsCount: 100, createdAt: new Date() },
  },
];

const postData = [
  {
    postId: '1',
    boardType: BOARD_TYPE.FAN,
    boardName: '테일러 스위프트',
    content: '근데 아마도 사실은',
    interaction: {
      likesCount: 0,
      dislikesCount: 100,
      commentsCount: 2,
      createdAt: new Date(),
    },
  },
  {
    postId: '2',
    boardType: BOARD_TYPE.COMMUNITY,
    boardName: '유튜브',
    content: '유튜브는 재밌던데 문제는',
    interaction: {
      likesCount: 30,
      dislikesCount: 0,
      commentsCount: 22,
      createdAt: new Date(),
    },
  },
  {
    postId: '3',
    boardType: BOARD_TYPE.FAN,
    boardName: '테일러 스위프트',
    content:
      '테일러 스위프트 최근 공연 내생각에는 근데 아마도 사실은 테일러 스위프트 최근 공연 내생각에는 근데 아마도 사실은',
    interaction: {
      likesCount: 10,
      dislikesCount: 0,
      commentsCount: 2,
      createdAt: new Date(),
    },
  },
  {
    postId: '4',
    boardType: BOARD_TYPE.FAN,
    boardName: '테일러 스위프트',
    content:
      '테일러 스위프트 최근 공연 내생각에는 근데 아마도 사실은 테일러 스위프트 최근 공연 내생각에는 근데 아마도 사실은',
    interaction: {
      likesCount: 3,
      dislikesCount: 0,
      commentsCount: 0,
      createdAt: new Date(),
    },
  },
  {
    postId: '5',
    boardType: BOARD_TYPE.FAN,
    boardName: '테일러 스위프트',
    content:
      '테일러 스위프트 최근 공연 내생각에는 근데 아마도 사실은 테일러 스위프트 최근 공연 내생각에는 근데 아마도 사실은',
    interaction: {
      likesCount: 0,
      dislikesCount: 0,
      commentsCount: 2,
      createdAt: new Date(),
    },
  },
];
