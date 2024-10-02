'use client';
import { useTranslations } from 'next-intl';

import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { VscSearch } from 'react-icons/vsc';
import CommunitySearchResult from './CommunitySearchResult';
import QuickLinksNavigation from './QuickLinksNavigation';
import InfluencerSearchResult from './InfluencerSearchResult';
import { useMainSearch } from './hooks/useMainSearch';
import { useSearchCommunity } from './hooks/useSearchCommunity';

const MainSearch = () => {
  const t = useTranslations('main_search');
  const { searchTerm, handleSearch } = useMainSearch();
  const { categoryResult } = useSearchCommunity(searchTerm);

  return (
    <Sheet>
      <SheetTrigger>
        <VscSearch
          aria-label="메인 검색"
          className="h-[22px] w-[22px] hover:scale-transition-105"
        />
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="flex h-full justify-center bg-black px-5 pt-9 text-white">
        <div className="w-full md:w-[768px]">
          <SheetHeader className="mb-8">
            <SheetTitle className="text-orange-600 body1-sb">FANMIX 브랜딩 카피</SheetTitle>
            <SheetDescription className="text-neutral-400 body3-r">
              FAN과 인플루언서가 함께하는 공간과 같은 서브 카피
            </SheetDescription>
          </SheetHeader>
          <section aria-label="검색어 입력" className="mb-[60px]">
            <div className="relative w-full">
              <Input
                className="h-11 w-full border-neutral-300 bg-neutral-900 py-[13px] pl-10 pr-3 text-white body2-r placeholder:text-neutral-500"
                placeholder={t('인플루언서 / 커뮤니티 검색')}
                type="text"
                inputMode="text"
                enterKeyHint="send"
                value={searchTerm}
                onChange={handleSearch}
              />
              <button type="submit" className="absolute left-3 top-[13px]">
                <VscSearch className="h-[18px] w-[18px] text-white" />
              </button>
            </div>
          </section>
          <section aria-label="검색결과">
            <div>
              <h2 className="mb-5 text-neutral-500 body2-m">
                {searchTerm ? t('검색 제안') : t('바로가기')}
              </h2>
              {searchTerm ? (
                <div className="flex flex-col gap-y-6">
                  <InfluencerSearchResult />
                  <CommunitySearchResult categories={categoryResult} />
                </div>
              ) : (
                <QuickLinksNavigation />
              )}
            </div>
          </section>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MainSearch;
