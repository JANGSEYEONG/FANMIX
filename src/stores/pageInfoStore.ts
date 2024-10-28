import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { PAGE_INFO_STORE_NAME } from './config';
import type { RouteKey } from '@/constants/routes';

interface CreatePostPage {
  currentPage: RouteKey | null;
  communityId: number | null;
  influencerId: number | null;
  influencerName: string | null;
}

interface PageInfoType {
  pageInfo: CreatePostPage;
  setPageInfo: (pageInfo: CreatePostPage) => void;
}

// 유저 데이터 정보 저장 스토어
export const usePageInfoStore = create<PageInfoType>()(
  devtools(
    persist(
      (set) => ({
        pageInfo: { currentPage: null, communityId: null, influencerId: null, influencerName: '' },
        setPageInfo: (pageInfo: CreatePostPage) => set({ pageInfo }),
      }),
      {
        name: PAGE_INFO_STORE_NAME,
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);
