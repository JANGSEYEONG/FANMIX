'use client';

import { memo } from 'react';

import Logo from '@/assets/logo/logo_symbol.svg';
import MainSearch from '../features/mainSearch/MainSearch';
import ExpandableMenu from '../features/expandableMenu/ExpandableMenu';

import { useTranslations } from 'next-intl';
import useCurrentRouteLabel from '@/hooks/useCurrentRouteLabel';

import { ROUTES } from '@/constants/routes';

const Header = () => {
  const t = useTranslations('topTitle');
  const currentLabel = useCurrentRouteLabel();

  return (
    <header className="mt-[10px] flex h-[25px] w-full flex-shrink-0 items-center justify-between px-5">
      <h2 className="text-h2-sb text-neutral-300">
        {currentLabel === ROUTES.HOME.LABEL ? <Logo className="h-6 w-6" /> : t(currentLabel)}
      </h2>
      <nav className="gap-[18px] text-white flex-center">
        <MainSearch />
        <ExpandableMenu />
      </nav>
    </header>
  );
};

export default memo(Header);
