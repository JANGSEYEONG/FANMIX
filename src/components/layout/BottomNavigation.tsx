'use client';

import { memo } from 'react';

import { cn } from '@/lib/utils';

import { Link, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import { getRootPath } from '@/lib/text';

import useBottomNavigationState from './hooks/useBottomNavigationState';

interface BottomNavigationProps {
  mainRef: React.RefObject<HTMLElement>;
}

const BottomNavigation = ({ mainRef }: BottomNavigationProps) => {
  const t = useTranslations('bottom_nav');
  const pathname = usePathname();
  const currentRoot = getRootPath(pathname);
  const { bottomNavigationItems, isVisible } = useBottomNavigationState(mainRef);

  return (
    <nav
      className={cn(
        'z-5 absolute bottom-0 flex h-20 w-full justify-between bg-neutral-800/70 px-5 transition-transform duration-300 ease-in-out blur-10-shadow',
        isVisible ? 'translate-y-0' : 'translate-y-full', // 스크롤 방향에 따라 슬라이드 효과
      )}>
      {bottomNavigationItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentRoot === item.root;
        return (
          <Link href={item.root} key={item.root}>
            <div className="h-14 w-14 gap-[2px] text-neutral-400 flex-col-center sub1-m hover:scale-transition-105">
              <Icon className={cn('h-6 w-6', isActive && 'text-orange-600')} />
              <span className={cn(isActive && 'text-white sub1-sb')}>{t(item.label)}</span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
};

export default memo(BottomNavigation);
