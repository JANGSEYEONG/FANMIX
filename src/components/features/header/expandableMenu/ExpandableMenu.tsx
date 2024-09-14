'use client';
import { Button } from '@/components/ui/button';
import { RiEarthFill } from 'react-icons/ri';

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
import { VscMenu } from 'react-icons/vsc';
import { Link, usePathname } from '@/i18n/routing';

const ExpandableMenu = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger>
        <VscMenu className="h-6 w-6 hover:scale-transition-105" />
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col items-start justify-between">
        <div className="flex flex-col gap-6">
          <SheetHeader className="items-start">
            {/* 언어 변경 영역 */}
            <div className="mb-2 flex items-center gap-3">
              <RiEarthFill className="h-6 w-6" />
              <Link href={pathname} locale="ko">
                KR
              </Link>
              /
              <Link href={pathname} locale="en">
                EN
              </Link>
            </div>
            <SheetTitle className="items-start">메뉴</SheetTitle>
            <SheetDescription className="w-full">메뉴를 선택해주세요.</SheetDescription>
          </SheetHeader>
          {/* 메뉴 영역 */}
          <ul className="">
            <li>인플루언서 찾기</li>
            <li>한줄 리뷰</li>
            <li>팬채널</li>
            <li>고객센터</li>
          </ul>
        </div>
        <SheetFooter className="flex w-full flex-row items-center justify-end">
          <SheetClose asChild>
            <Link href="/login">
              <Button type="submit">Login</Button>
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ExpandableMenu;
