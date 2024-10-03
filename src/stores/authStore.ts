import { create } from 'zustand';
import { createJSONStorage, persist, devtools } from 'zustand/middleware';
import { AUTH_STORE_NAME } from './config';
import { useUserStore } from './userStore';

import Cookies from 'js-cookie';

interface AuthState {
  isLoggedIn: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  setLogin: (accessToken: string, refreshToken: string) => void;
  setLogout: () => void;
  setAccessToken: (newAccessToken: string) => void;
  setRefreshToken: (newRefreshToken: string) => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        isLoggedIn: false,
        accessToken: null,
        refreshToken: null,
        setLogin: (accessToken, refreshToken) => {
          set({
            isLoggedIn: true,
            accessToken,
            refreshToken,
          });
          // 쿠키에 토큰값 세팅
          Cookies.set('auth_token', accessToken, { secure: true, sameSite: 'strict' });
        },
        setLogout: () => {
          set({
            isLoggedIn: false,
            accessToken: null,
            refreshToken: null,
          });
          // 저장된 유저 정보 상태 초기화
          useUserStore.getState().clearUser();
          Cookies.remove('auth_token');
        },
        setAccessToken: (newAccessToken) => set({ accessToken: newAccessToken }),
        setRefreshToken: (newRefreshToken) => set({ refreshToken: newRefreshToken }),
      }),
      {
        name: AUTH_STORE_NAME,
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

// 페이지 접속 시 최초 실행되며 로컬스토리지에 이전 사용 토큰이 있는지 확인, 없으면 로그아웃 처리
// node 서버에서의 실행 방지를 위해 window 객체가 존재하는 브라우저일 때만 코드 실행
if (typeof window !== 'undefined') {
  const initializeAuth = () => {
    const authStore = useAuthStore.getState();

    // #20241003.syjang, 서버에서 refreshToken이 null로 넘어와서 해결 전까지는 refreshToken 빈값 체크 제외
    if (authStore?.accessToken) {
      authStore.setLogin(authStore.accessToken, authStore.refreshToken || '');
    } else {
      authStore.setLogout();
    }
  };

  initializeAuth();
}
