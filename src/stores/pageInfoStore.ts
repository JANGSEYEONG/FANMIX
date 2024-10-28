import { RouteKey } from '@/constants/routes';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

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
  devtools((set) => ({
    pageInfo: { currentPage: null, communityId: null, influencerId: null, influencerName: '' },
    setPageInfo: (pageInfo: CreatePostPage) => set({ pageInfo }),
  })),
);
