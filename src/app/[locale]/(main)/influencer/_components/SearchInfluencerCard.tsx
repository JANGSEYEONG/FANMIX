import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import InfluencerTagList from '@/components/domain/influencer/InfluencerTagList';
import AuthenticatedBadge from '@/components/domain/influencer/AuthenticatedBadge';
import InfluencerRatingBar from '@/components/domain/influencer/InfluencerRatingBar';
import { formatDateToYYMMDD, parseISOToDate } from '@/lib/date';

// interface SearchInfluencerCardProps {
//   influencerId: string;
//   influencerImageUrl: string;
//   influencerName: string;
//   tagList: string[];
//   contentScore: number;
//   communicationScore: number;
//   trustworthinessScore: number;
//   latestReviewDate: string;
// }

// 인플루언서 상세 페이지로 이동
const SearchInfluencerCard = () => {
  const t = useTranslations('influencer_index_page');
  // prop 으로 넘겨받을거
  const testData = {
    influencerId: '3',
    influencerName: '은젤',
    influencerImageUrl: '/assets/images/test/alganzi.png',
    tagList: ['자기계발', '연애', '사회학'],
    contentScore: 3,
    communicationScore: 2,
    trustworthinessScore: 1,
    latestReviewDate: '2024-09-25T03:32:50.964124',
  };

  return (
    <Link href={`/influencer/${testData.influencerId}`}>
      <article className="gap-x-4 flex-center">
        <figure className="relative h-[110px] w-[100px] flex-shrink-0 bg-slate-300">
          <Image
            priority
            src={testData.influencerImageUrl}
            alt={`인플루언서 ${testData.influencerName} 사진`}
            fill
            className="object-cover"
            sizes="100%"
          />
        </figure>
        <div className="flex-1">
          <header className="mb-1.5 flex items-center gap-x-[3px]">
            <h2 className="body2-sb">{testData.influencerName}</h2>
            <AuthenticatedBadge size={18} />
          </header>
          <InfluencerTagList variant="gray" className="mb-2.5" contents={testData.tagList} />
          <div className="mb-[9px] flex items-center gap-x-1.5 text-neutral-300 body3-r">
            <span>{t('최신리뷰')}</span>
            <time>{formatDateToYYMMDD(parseISOToDate(testData.latestReviewDate))}</time>
          </div>
          <InfluencerRatingBar {...testData} />
        </div>
      </article>
    </Link>
  );
};
export default SearchInfluencerCard;
