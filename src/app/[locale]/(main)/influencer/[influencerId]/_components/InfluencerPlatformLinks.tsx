import Image from 'next/image';

import { Fragment } from 'react';
import { Separator } from '@/components/ui/separator';
import { PLATFORM_ICON_PATH } from '@/constants/platform';
import type { PlatformLink } from '@/types/domain/influencerType';
// 임시 export, api 연동할 때 타입 따로 지정하기
export interface InfluencerPlatformLinksProps {
  snsList: PlatformLink[];
  mediaList: PlatformLink[];
  plusList: PlatformLink[];
}
const InfluencerPlatformLinks = ({
  snsList,
  mediaList,
  plusList,
}: InfluencerPlatformLinksProps) => {
  const platformGroups = [
    { title: 'SNS', list: snsList },
    { title: 'Media', list: mediaList },
    { title: 'Plus+', list: plusList },
  ];
  return (
    <nav className="flex-center">
      {platformGroups.map(({ title, list }, index) => (
        <Fragment key={title}>
          {index > 0 && (
            <Separator orientation="vertical" className="h-[34px] w-[0.5px] bg-neutral-500" />
          )}
          <PlatformGroup title={title} platforms={list} />
        </Fragment>
      ))}
    </nav>
  );
};

export default InfluencerPlatformLinks;

interface PlatformGroupProps {
  title: string;
  platforms: PlatformLink[];
}

const PlatformGroup = ({ title, platforms }: PlatformGroupProps) => (
  <div aria-label={`${title} 목록`} className="flex-1 gap-1 flex-col-center">
    <h4 className="text-neutral-400 sub2-m">{title}</h4>
    <ul className="gap-[5px] flex-center">
      {platforms.length === 0 ? (
        <li className="h-5 w-5 text-neutral-500 flex-center">-</li>
      ) : (
        platforms.map(({ platformType, url }) => (
          <PlatformLink key={url} url={url} iconPath={PLATFORM_ICON_PATH[platformType]} />
        ))
      )}
    </ul>
  </div>
);

interface PlatformLinkProps {
  url: string;
  iconPath: string;
}
const PlatformLink = ({ url, iconPath }: PlatformLinkProps) => {
  return (
    <li className="relative h-5 w-5 overflow-hidden rounded bg-neutral-600">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image
          priority
          src={iconPath}
          alt="플랫폼 로고 이미지"
          fill
          sizes="100%"
          className="object-cover"
        />
      </a>
    </li>
  );
};
