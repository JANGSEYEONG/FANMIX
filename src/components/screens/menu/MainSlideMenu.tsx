'use client';

import { Link } from '@/i18n/routing';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Button } from '@/components/ui/button';
import { VscMenu } from 'react-icons/vsc';

import MenuContent from './MenuContent';
import ChangeLanguage from './ChangeLanguage';

import { ROUTES } from '@/constants/routes';
import { useTranslations } from 'next-intl';

const MainSlideMenu = () => {
  const t = useTranslations('main_slide_menu');
  return (
    <Sheet>
      <SheetTrigger>
        <VscMenu aria-label="메인 메뉴" className="h-6 w-6 hover:scale-transition-105" />
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col justify-between text-white dark-gradient">
        <div className="flex w-full flex-col gap-[58px] px-5">
          <SheetHeader>
            {/* 접근성 경고 방지용 타이틀 */}
            <VisuallyHidden>
              <SheetTitle>Main Menu</SheetTitle>
              <SheetDescription>Main Menu List</SheetDescription>
            </VisuallyHidden>
            {/* 언어 변경 영역 */}
            <ChangeLanguage />
          </SheetHeader>

          {/* 메뉴 영역 */}
          <MenuContent />
        </div>
        <SheetFooter>
          <SheetClose asChild className="w-full">
            <Link href={ROUTES.LOGIN.PATH}>
              <Button className="h-[82px] w-full body2-m">{t('로그인 하기')}</Button>
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MainSlideMenu;
