import Image from 'next/image';
import { Link } from '@/i18n/routing';

import { useId } from 'react';
import AuthenticatedBadge from '@/components/domain/influencer/AuthenticatedBadge';

export interface InfluencerThumbnailProps {
  influencerId: string;
  influencerName: string;
  influencerImageUrl: string;
  isAuthenticated: boolean;
}

const InfluencerThumbnail = ({
  influencerId,
  influencerName,
  influencerImageUrl,
  isAuthenticated,
}: InfluencerThumbnailProps) => {
  const figureId = useId();
  return (
    <Link href={`/influencer/${influencerId}`}>
      <figure
        className="relative h-[130px] w-28 shrink-0 cursor-pointer"
        aria-labelledby={`${figureId}-influencer-${influencerId}`}>
        <Image
          priority
          src={influencerImageUrl}
          alt={`인플루언서 ${influencerName}의 프로필 이미지`}
          fill
          sizes="100%"
          className="object-cover"
        />

        <figcaption
          id={`${figureId}-influencer-${influencerId}`}
          className="absolute bottom-0 flex h-[60px] w-full items-end justify-center pb-2 text-white neutral-800-gradient body3-sb">
          {influencerName}
          {isAuthenticated && <span className="sr-only">(인증된 인플루언서)</span>}
        </figcaption>
        {isAuthenticated && (
          <>
            <AuthenticatedBadge size={20} className="absolute right-[3px] top-[5px]" />
            <div className="absolute bottom-0 left-0 h-0.5 w-full bg-lime-400" aria-hidden="true" />
          </>
        )}
      </figure>
    </Link>
  );
};

export default InfluencerThumbnail;