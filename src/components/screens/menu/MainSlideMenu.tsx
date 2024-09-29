'use client';

import { VscMenu } from 'react-icons/vsc';
import { Link } from '@/i18n/routing';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

import MenuContent from './MenuContent';
import ChangeLanguage from './ChangeLanguage';

import { ROUTES } from '@/constants/routes';

const MainSlideMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <VscMenu aria-label="메인 메뉴" className="h-6 w-6 hover:scale-transition-105" />
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col justify-between text-white dark-gradient">
        <div className="flex w-full flex-col gap-[30px] px-5">
          <SheetHeader className="mb-[38px] items-start">
            {/* 언어 변경 영역 */}
            <ChangeLanguage />
          </SheetHeader>
          {/* 메뉴 영역 */}
          <MenuContent />
        </div>
        <SheetFooter className="w-full bg-neutral-800 text-white">
          <SheetClose asChild className="w-full flex-center">
            <Link href={ROUTES.LOGIN.PATH}>
              <Button
                type="submit"
                variant="default"
                className="h-[82px] w-full bg-neutral-800 py-4 text-white body2-m">
                로그인 하기
              </Button>
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MainSlideMenu;
