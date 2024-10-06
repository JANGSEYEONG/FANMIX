'use client';

import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { COMMUNITY_CATEGORY } from '@/constants/communityCategory';
import { removeAllWhitespace } from '@/lib/text';

import type { CommunityCategory } from '@/types/domain/boardType';

export const useSearchCommunity = (searchTerm: string) => {
  const t = useTranslations('community_category');

  // 번역된 카테고리 이름을 메모
  const translatedCategories = useMemo(
    () =>
      COMMUNITY_CATEGORY.map((category) => ({
        ...category,
        translatedName: removeAllWhitespace(t(category.NAME)).toLowerCase(),
      })),
    [t],
  );

  // 카테고리 검색 결과 리스트
  const categoryResult: CommunityCategory[] = useMemo(() => {
    const trimmedSearchTerm = removeAllWhitespace(searchTerm).toLowerCase();
    if (trimmedSearchTerm) {
      return translatedCategories
        .filter((category) => category.translatedName.includes(trimmedSearchTerm))
        .map((category) => ({
          categoryId: category.ID.toString(),
          categoryName: t(category.NAME),
        }));
    }
    return [];
  }, [searchTerm, translatedCategories, t]);

  return { categoryResult };
};
