import Image from 'next/image';
import { useId } from 'react';
import { VscPassFilled } from 'react-icons/vsc';

export interface InfluencerThumbnailProps {
  influencerId: string;
  name: string;
  imageSrc: string;
  isVerified: boolean;
}

const InfluencerThumbnail = ({
  influencerId,
  name,
  imageSrc,
  isVerified,
}: InfluencerThumbnailProps) => {
  const figureId = useId();
  return (
    <figure
      className="relative h-[130px] w-28 shrink-0 cursor-pointer"
      aria-labelledby={`${figureId}-influencer-${influencerId}`}>
      <Image
        priority
        src={imageSrc}
        alt={`인플루언서 ${name}의 프로필 이미지`}
        fill
        sizes="112px"
        className="object-cover"
      />

      <figcaption
        id={`${figureId}-influencer-${influencerId}`}
        className="absolute bottom-0 flex h-[60px] w-full items-end justify-center pb-2 text-white neutral-800-gradient body3-sb">
        {name}
        {isVerified && <span className="sr-only">(인증된 인플루언서)</span>}
      </figcaption>
      {isVerified && (
        <>
          <div className="absolute right-[3px] top-[5px] inline-block">
            {/* 체크 표시 검정색으로 채우기용 태그 */}
            <div className="absolute inset-1 rounded-full bg-black" />
            <VscPassFilled className="relative h-5 w-5 text-lime-400" />
          </div>
          <div className="absolute bottom-0 left-0 h-0.5 w-full bg-lime-400" aria-hidden="true" />
        </>
      )}
    </figure>
  );
};

export default InfluencerThumbnail;
