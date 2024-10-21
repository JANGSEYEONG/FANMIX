import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import { COMMUNITY_CATEGORY } from '@/constants/communityCategory';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const CommunityIconNavigation = () => {
  const t = useTranslations('community_category');
  return (
    <nav className="bg-neutral-900 pb-6 pt-3 min-[568px]:flex-center">
      <ScrollArea>
        <ul className="grid auto-cols-[52px] grid-flow-col grid-rows-2 gap-x-9 gap-y-4 px-[38px] sub1-m">
          {COMMUNITY_CATEGORY.map(({ ID, NAME, ICON_PATH }) => {
            return (
              <li key={ID} className="w-[52px]">
                <Link href={`/community/${ID}`} className="gap-y-0.5 flex-col-center">
                  <Image
                    priority
                    src={ICON_PATH}
                    alt={`${t(NAME)} 아이콘`}
                    width={50}
                    height={50}
                  />
                  <span className="text-center">{t(NAME)}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </nav>
  );
};

export default CommunityIconNavigation;
