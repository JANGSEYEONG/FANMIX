import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import InfluencerTagList from '@/components/domain/influencer/InfluencerTagList';
import AuthenticatedBadge from '@/components/domain/influencer/AuthenticatedBadge';
import InfluencerRatingBar from '@/components/domain/influencer/InfluencerRatingBar';
import { formatDateToYYMMDD, parseISOToDate } from '@/lib/date';

interface SearchInfluencerCardProps {
  influencerId: number;
  influencerName: string;
  influencerImageUrl: string;
  tagList: string[];
  latestReviewDate: string;
  contentsRating: number;
  communicationRating: number;
  trustRating: number;
  isAuthenticated: boolean;
}

// 인플루언서 상세 페이지로 이동
const SearchInfluencerCard = ({
  influencerId,
  influencerName,
  influencerImageUrl,
  tagList,
  latestReviewDate,
  contentsRating,
  communicationRating,
  trustRating,
  isAuthenticated,
}: SearchInfluencerCardProps) => {
  const t = useTranslations('influencer_index_page');

  return (
    <Link href={`/influencer/${influencerId}`}>
      <article className="gap-x-4 flex-center">
        <div className="relative h-[110px] w-[100px] flex-shrink-0 bg-slate-300">
          <Image
            priority
            src={influencerImageUrl}
            alt={`인플루언서 ${influencerName} 사진`}
            fill
            className="object-cover"
            sizes="100px"
          />
        </div>
        <div className="flex-1">
          <header className="mb-1.5 flex items-center gap-x-[3px]">
            <h2 className="body2-sb">{influencerName}</h2>
            {isAuthenticated && <AuthenticatedBadge size={18} />}
          </header>
          <InfluencerTagList variant="gray" className="mb-2.5" contents={tagList} />
          <div className="mb-[9px] flex items-center gap-x-1.5 text-neutral-300 body3-r">
            <span>{t('최신리뷰')}</span>
            {latestReviewDate ? (
              <time>{formatDateToYYMMDD(parseISOToDate(latestReviewDate))}</time>
            ) : (
              <p className="text-neutral-300/50 sub1-r">{t('아직 등록된 리뷰가 없어요')}</p>
            )}
          </div>
          <InfluencerRatingBar
            {...{
              contentsRating,
              communicationRating,
              trustRating,
            }}
          />
        </div>
      </article>
    </Link>
  );
};
export default SearchInfluencerCard;
