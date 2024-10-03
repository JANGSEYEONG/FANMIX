'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { VscMenu } from 'react-icons/vsc';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import MenuContent from './MenuContent';
import ChangeLanguage from './ChangeLanguage';
import LoginLogoutButton from './LoginLogoutButton';

const MainSlideMenu = () => {
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
          <LoginLogoutButton />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MainSlideMenu;
