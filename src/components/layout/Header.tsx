'use client';

import { cn } from '@/lib/utils';
import Logo from '@/assets/logo/logo_symbol.svg';

import { memo } from 'react';

import { useTranslations } from 'next-intl';
import useCurrentRouteLabel from '@/hooks/useCurrentRouteLabel';

import { ROUTES } from '@/constants/routes';

import GoBackButton from '../common/button/GoBackButton';

import { MainAlarm } from '../domain/mainAlarm';
import { MainSearch } from '../domain/mainSearch';
import { ExpandableMenu } from '../domain/expandableMenu';

const Header = () => {
  const t = useTranslations('top_title');
  const [currentLabel, hasPrevButton] = useCurrentRouteLabel();

  return (
    <header className="mt-[10px] flex h-[25px] w-full flex-shrink-0 items-center justify-between pr-5">
      {/* 좌측 타이틀/로고 영역 */}
      <div className={cn('flex items-center gap-1', hasPrevButton ? 'pl-3.5' : 'pl-5')}>
        {hasPrevButton && <GoBackButton variant="prev" />}
        <h1 className="text-h2-sb text-neutral-300">
          {currentLabel === ROUTES.HOME.LABEL ? <Logo className="h-6 w-6" /> : t(currentLabel)}
        </h1>
      </div>
      {/* 우측 네비게이션 영역 */}
      <nav className="gap-[18px] text-white flex-center">
        <MainSearch />
        <MainAlarm />
        <ExpandableMenu />
      </nav>
    </header>
  );
};

export default memo(Header);
