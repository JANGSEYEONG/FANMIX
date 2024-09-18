'use client';

import { VscMenu } from 'react-icons/vsc';
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
import { Button } from '@/components/ui/button';

import MenuContent from './MenuContent';
import ChangeLanguage from './ChangeLanguage';
import { ROUTES } from '@/constants/routes';

const MainSlideMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <VscMenu className="h-6 w-6 hover:scale-transition-105" />
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col items-start justify-between">
        <div className="flex flex-col gap-6">
          <SheetHeader className="items-start">
            {/* 언어 변경 영역 */}
            <ChangeLanguage />
            <SheetTitle className="mt-2 items-start">메뉴</SheetTitle>
            <SheetDescription className="w-full">메뉴를 선택해주세요.</SheetDescription>
          </SheetHeader>
          {/* 메뉴 영역 */}
          <MenuContent />
        </div>
        <SheetFooter className="flex w-full flex-row items-center justify-end">
          <SheetClose asChild>
            <Link href={ROUTES.LOGIN.PATH}>
              <Button type="submit">Login</Button>
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MainSlideMenu;
