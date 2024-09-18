import { create } from 'zustand';
import { createJSONStorage, persist, devtools } from 'zustand/middleware';
import { USER_STORE_NAME } from './config';
import type { User } from '@/types/domain/userType';

interface UserStoreType {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

// 유저 데이터 정보 저장 스토어
export const useUserStore = create<UserStoreType>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (userUpdate: Partial<User>) =>
          set((state) => ({
            user: state.user ? { ...state.user, ...userUpdate } : (userUpdate as User),
          })),
        clearUser: () => set({ user: null }),
      }),
      {
        name: USER_STORE_NAME,
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);
