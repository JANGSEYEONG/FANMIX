'use client';

import { cn } from '@/lib/utils';
import { LiaHomeSolid, LiaBookmark, LiaEnvelope, LiaUser } from 'react-icons/lia';

import { ROUTES } from '@/constants/routes';
import { Link, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const BottomNavigation = () => {
  const t = useTranslations('bottomNav');
  const pathname = usePathname();

  const navItems = [
    { label: ROUTES.HOME.LABEL, icon: LiaHomeSolid, path: ROUTES.HOME.PATH },
    { label: ROUTES.FOLLOW.LABEL, icon: LiaBookmark, path: ROUTES.FOLLOW.PATH },
    { label: ROUTES.FANCHANNEL.LABEL, icon: LiaEnvelope, path: ROUTES.FANCHANNEL.PATH },
    { label: ROUTES.MYPAGE.LABEL, icon: LiaUser, path: ROUTES.MYPAGE.PATH },
  ];
  return (
    <nav className="z-5 absolute bottom-0 flex h-[80px] w-full justify-between bg-darkgray/70 px-5 bg-blur-10">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.path;
        return (
          <Link href={item.path} key={item.path}>
            <div className="h-14 w-14 gap-[2px] text-sub1-m text-neutral-400 flex-col-center hover:scale-transition-105">
              <Icon className={cn('h-6 w-6', isActive && 'text-orange-1')} />
              <span className={cn(isActive && 'sb text-white')}>{t(item.label)}</span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNavigation;
