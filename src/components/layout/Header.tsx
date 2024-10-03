'use client';

import { cn } from '@/lib/utils';

import { memo } from 'react';
import { useTranslations } from 'next-intl';
import { useCurrentRouteLabel } from '@/hooks/useCurrentRouteLabel';

import { ROUTES } from '@/constants/routes';

import Logo from '../../../public/assets/images/logo/logo_symbol.svg';
import GoBackButton from '../common/GoBackButton';
import { MainNotification, MainSearch, MainSlideMenu } from '../screens';

const Header = () => {
  const t = useTranslations('top_title');
  const { currentLabel, hasPrevButton, hideTitle, hideRightNav, headerColor } =
    useCurrentRouteLabel();
  return (
    <header
      className="absolute left-0 top-0 z-10 flex h-[35px] w-full flex-shrink-0 items-end justify-between pr-5 blur-10"
      style={{ backgroundColor: headerColor }}>
      {/* 좌측 타이틀/로고 영역 */}
      <div className={cn('flex items-center gap-1', hasPrevButton ? 'pl-3.5' : 'pl-5')}>
        {hasPrevButton && <GoBackButton variant="prev" />}
        {!hideTitle && (
          <h1 className="text-neutral-300 h2-sb">
            {currentLabel === ROUTES.HOME.LABEL ? <Logo className="h-6 w-6" /> : t(currentLabel)}
          </h1>
        )}
      </div>
      {/* 우측 네비게이션 영역 */}
      {!hideRightNav && (
        <nav className="gap-[18px] text-white flex-center">
          <MainSearch />
          <MainNotification />
          <MainSlideMenu />
        </nav>
      )}
    </header>
  );
};

export default memo(Header);
