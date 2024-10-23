'use client';

import { cn } from '@/lib/utils';
import { memo } from 'react';
import { usePathname } from '@/i18n/routing';

import { useTranslations } from 'next-intl';
import { useAuthNavigation } from './hooks/useAuthNavigation';

import { getRootPath } from '@/lib/text';
import { BOTTOM_NAVIGATION_ITEMS } from '@/constants/bottomNavigation';

const BottomNavigation = () => {
  const t = useTranslations('bottom_nav');
  const pathname = usePathname();
  const currentRoot = getRootPath(pathname);

  const { navigateWithAuthCheck } = useAuthNavigation();

  return (
    <ul className="flex h-20 justify-between bg-neutral-800/70 px-5 blur-10-shadow">
      {BOTTOM_NAVIGATION_ITEMS.map(({ icon, path, root, requireAuth, label }) => {
        const Icon = icon;
        const isActive = currentRoot === root;
        return (
          <li key={path}>
            <button
              className="h-14 w-14 gap-[2px] text-neutral-400 flex-col-center sub1-m hover:scale-transition-105"
              onClick={() => navigateWithAuthCheck(root, requireAuth)}>
              <Icon className={cn('h-6 w-6', isActive && 'text-orange-600')} />
              <span className={cn(isActive && 'text-white sub1-sb')}>{t(label)}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default memo(BottomNavigation);
