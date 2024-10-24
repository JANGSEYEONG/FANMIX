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
import InfluencerMainSearchResult from './InfluencerMainSearchResult';

import { useMainSearch } from './hooks/useMainSearch';
import { useSearchCommunity } from './hooks/useSearchCommunity';

import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';
import ErrorHandlingWrapper from '@/components/common/error/ErrorHandlingWrapper';

const MainSearch = () => {
  const t = useTranslations('main_search');
  const { searchTerm, debouncedSearchTerm, handleSearch } = useMainSearch(300); // 검색 디바운스 0.3초

  const { categoryResult } = useSearchCommunity(debouncedSearchTerm);

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
                <ErrorHandlingWrapper
                  errorFallbackMessage={t(
                    '인플루언서 및 커뮤니티 검색 중 오류가 발생했어요 다시 시도해 주세요',
                  )}
                  errorClassName="mt-20"
                  suspenseFallback={<ComponentSpinner className="mt-20" />}>
                  <div className="flex flex-col gap-y-6">
                    <InfluencerMainSearchResult
                      searchTerm={debouncedSearchTerm}
                      isCategoryResultEmpty={categoryResult.length === 0}
                    />
                    <CommunitySearchResult categories={categoryResult} />
                  </div>
                </ErrorHandlingWrapper>
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
