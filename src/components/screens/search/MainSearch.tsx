'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { VscSearch } from 'react-icons/vsc';

const MainSearch = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <VscSearch className="h-[22px] w-[22px] hover:scale-transition-105" />
      </SheetTrigger>
      <SheetContent side="bottom" className="flex h-full flex-col items-start justify-between">
        <div className="flex flex-col gap-6">
          <SheetHeader className="items-start">
            <SheetTitle className="items-start">검색</SheetTitle>
            <SheetDescription className="w-full">인플루언서 이름을 검색해주세요.</SheetDescription>
          </SheetHeader>
          {/* 검색바 영역 */}
          검색바
          <hr />
          {/* 검색 결과 영역 */}
          결과
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MainSearch;
