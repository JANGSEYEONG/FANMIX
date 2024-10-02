'use client';

import { debounce } from 'lodash';
import { useTranslations } from 'next-intl';
import { useState, useEffect, useMemo } from 'react';
import { COMMUNITY_CATEGORY } from '@/constants/communityCategory';
import { removeAllWhitespace } from '@/lib/text';

import type { CommunityCategory } from '@/types/domain/boardType';

export const useSearchCommunity = (searchTerm: string) => {
  const t = useTranslations('community_category');
  const [categoryResult, setCategoryResult] = useState<CommunityCategory[]>([]);

  // 번역된 카테고리 이름을 메모
  const translatedCategories = useMemo(
    () =>
      COMMUNITY_CATEGORY.map((category) => ({
        ...category,
        translatedName: removeAllWhitespace(t(category.NAME)).toLowerCase(),
      })),
    [t],
  );

  // 0.3초 디바운스
  const debouncedSearch = useMemo(
    () =>
      debounce((term: string) => {
        const trimmedSearchTerm = removeAllWhitespace(term).toLowerCase();
        if (trimmedSearchTerm) {
          const filteredCategories = translatedCategories
            .filter((category) => category.translatedName.includes(trimmedSearchTerm))
            .map((category) => ({
              categoryId: category.ID.toString(),
              categoryName: t(category.NAME),
            }));
          setCategoryResult(filteredCategories);
        } else {
          setCategoryResult([]);
        }
      }, 300),
    [translatedCategories, t],
  );

  useEffect(() => {
    debouncedSearch(searchTerm);
    // 컴포넌트가 언마운트되거나 searchTerm이 변경될 때 디바운스 취소
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm, debouncedSearch]);

  return { categoryResult };
};
