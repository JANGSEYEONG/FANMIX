'use client';

import { memo } from 'react';

import { cn } from '@/lib/utils';

import { Link, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import useBottomNavigationAction from './hooks/useBottomNavigationState';

const BottomNavigation = () => {
  const t = useTranslations('bottomNav');
  const pathname = usePathname();
  const { bottomNavigationItems, isVisible } = useBottomNavigationAction();

  return (
    <nav
      className={cn(
        'z-5 absolute bottom-0 flex h-[80px] w-full justify-between bg-neutral-800/70 px-5 transition-transform duration-300 ease-in-out blur-10',
        isVisible ? 'translate-y-0' : 'translate-y-full', // 스크롤 방향에 따라 슬라이드 효과
      )}>
      {bottomNavigationItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.path;
        return (
          <Link href={item.path} key={item.path}>
            <div className="h-14 w-14 gap-[2px] text-sub1-m text-neutral-400 flex-col-center hover:scale-transition-105">
              <Icon className={cn('h-6 w-6', isActive && 'text-orange-600')} />
              <span className={cn(isActive && 'sb text-white')}>{t(item.label)}</span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
};

export default memo(BottomNavigation);
