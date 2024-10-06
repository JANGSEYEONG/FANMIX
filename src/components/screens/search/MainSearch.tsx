'use client';
import { useTranslations } from 'next-intl';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { VscSearch } from 'react-icons/vsc';

import MainSearchInput from './MainSearchInput';
import CommunitySearchResult from './CommunityMainSearchResult';
import QuickLinksNavigation from './QuickLinksNavigation';
import InfluencerSearchResult from './InfluencerMainSearchResult';

import { useMainSearch } from './hooks/useMainSearch';
import { useSearchCommunity } from './hooks/useSearchCommunity';
import { useMainSearchInfluencer } from './hooks/useMainSearchInfluencer';

const MainSearch = () => {
  const t = useTranslations('main_search');
  const { searchTerm, debouncedSearchTerm, handleSearch } = useMainSearch(300); // 검색 디바운스 0.3초

  const { categoryResult } = useSearchCommunity(debouncedSearchTerm);
  const { influencerResult, isLoading, isError } = useMainSearchInfluencer(debouncedSearchTerm);

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
            <SheetTitle className="text-orange-600 body1-sb">
              {t('FANMIX - 내 선택이 만드는 콘텐츠')}
            </SheetTitle>
            <SheetDescription className="text-neutral-400 body3-r">
              {t('나에게 맞는 인플루언서를 통해 콘텐츠를 더 풍성하게 즐기세요')}
            </SheetDescription>
          </SheetHeader>
          <section aria-label="검색어 입력" className="mb-[60px]">
            <MainSearchInput {...{ searchTerm, handleSearch }} />
          </section>
          <section aria-label="검색결과">
            <div>
              <h2 className="mb-5 text-neutral-500 body2-m">
                {searchTerm ? t('검색 제안') : t('바로가기')}
              </h2>
              {searchTerm ? (
                (!influencerResult || influencerResult.data.length === 0) &&
                categoryResult.length === 0 ? (
                  <div className="h-full text-neutral-500 body3-r">
                    {t('인플루언서 및 커뮤니티 검색 결과가 없어요')}
                  </div>
                ) : (
                  <div className="flex flex-col gap-y-6">
                    <InfluencerSearchResult
                      influencers={influencerResult}
                      {...{ isLoading, isError }}
                    />
                    <CommunitySearchResult categories={categoryResult} />
                  </div>
                )
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
