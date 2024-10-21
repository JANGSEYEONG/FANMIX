import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { COMMUNITY_CATEGORY } from '@/constants/communityCategory';
import { LiaBookmark } from 'react-icons/lia';

interface CommunityBannerProps {
  communityId: number;
}

const CommunityBanner = ({ communityId }: CommunityBannerProps) => {
  const t = useTranslations('community_category_greeting');
  const community = COMMUNITY_CATEGORY.find(({ ID }) => ID === communityId);

  if (!community) return null;

  const communityIconPath = community.ICON_PATH;
  const communityName = community.NAME;

  if (!communityName) return null;
  return (
    <div className="flex h-[50px] items-center bg-neutral-800">
      <span className="flex-1 gap-x-2 flex-center">
        <Image
          priority
          src={communityIconPath}
          alt={`${t(communityName)} 아이콘`}
          width={40}
          height={40}
        />
        <p className="body3-m">{t(communityName)}</p>
      </span>
      <button className="h-full w-[50px] bg-neutral-600 flex-center">
        <LiaBookmark className="h-[25px] w-[25px]" />
      </button>
    </div>
  );
};

export default CommunityBanner;
