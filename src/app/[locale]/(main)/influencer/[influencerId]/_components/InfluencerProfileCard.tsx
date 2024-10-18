import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Separator } from '@/components/ui/separator';

import InfluencerPlatformLinks from './InfluencerPlatformLinks';
import InfluencerTagList from '@/components/domain/influencer/InfluencerTagList';
import AuthenticatedBadge from '@/components/domain/influencer/AuthenticatedBadge';
import InfluencerFollowToggleButton from '@/components/domain/influencer/InfluencerFollowToggleButton';

import type { PlatformLink } from '@/types/domain/influencerType';
import type { Gender } from '@/types/domain/userType';

interface InfluencerProfileCardProps {
  influencerId: number;
  influencerName: string;
  influencerImageUrl: string;
  isAuthenticated: boolean;
  snsList: PlatformLink[];
  mediaList: PlatformLink[];
  plusList: PlatformLink[];
  tagList: string[];
  gender: Gender;
  nationality: string;
}

const InfluencerProfileCard = ({
  influencerId,
  influencerName,
  influencerImageUrl,
  isAuthenticated,
  snsList,
  mediaList,
  plusList,
  tagList,
  gender,
  nationality,
}: InfluencerProfileCardProps) => {
  const t = useTranslations('influencer_page');
  const tGender = useTranslations('gender');
  return (
    <>
      <div className="relative pb-[22px] pl-[170px] pr-5 pt-[65px] orange-700-gradient">
        <figure className="absolute left-[20px] top-[65px] h-44 w-[130px]">
          <Image
            priority
            src={influencerImageUrl}
            alt={`${influencerName}의 프로필 이미지`}
            fill
            sizes="100%"
            className="object-cover"
          />
        </figure>
        <div className="flex justify-between">
          <h1 className="mb-0.5 break-keep h1-sb">{influencerName}</h1>
          <InfluencerFollowToggleButton {...{ influencerId }} />
        </div>
        <aside className="mb-[15px] flex flex-wrap items-center gap-[7px] sub1-r">
          {isAuthenticated && (
            <>
              <span className="gap-0.5 text-lime-400 flex-center sub1-m">
                <AuthenticatedBadge size={14} />
                {t('인증 인플루언서')}
              </span>
              <Separator orientation="vertical" className="h-[10px] w-[1px] bg-orange-200" />
            </>
          )}
          <span>{gender ? tGender(gender) : '-'}</span>
          <Separator orientation="vertical" className="h-[10px] w-[1px] bg-orange-200" />
          <span>{nationality}</span>
        </aside>
        <InfluencerTagList contents={tagList} variant="destructive" isLinkToTagSearch />
      </div>
      <div className="pl-[170px] pr-5">
        <InfluencerPlatformLinks {...{ snsList, mediaList, plusList }} />
      </div>
    </>
  );
};

export default InfluencerProfileCard;
