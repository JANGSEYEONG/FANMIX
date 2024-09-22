'use client';

import { login } from '@/services/authService';

import { ROUTES } from '@/constants/routes';

import { useRouter } from '@/i18n/routing';
import { useCallback } from 'react';
import { useTranslations } from 'next-intl';

import useInformationToast from '@/hooks/useInformationToast';

import { useUserStore } from '@/stores/userStore';
import { useAuthStore } from '@/stores/authStore';
import { useModalStore } from '@/stores/modalStore';

import type { LoginResponse } from '@/types/service/authServiceType';
import { SignUpSuccess } from '@/components/screens';

const useGoogleLogin = () => {
  const t = useTranslations('api_result');
  const { showErrorToast } = useInformationToast();
  const router = useRouter();

  const openModal = useModalStore((state) => state.openModal);

  const setLogin = useAuthStore((state) => state.setLogin);
  const setUser = useUserStore((state) => state.setUser);

  const handleSuccessLogin = useCallback(
    (loginResult: LoginResponse) => {
      const { accessToken, refreshToken, isFirstLogin, ...user } = loginResult.data;

      // 받아온 user 정보 authStore, userStore에 저장하기
      setLogin(accessToken, refreshToken);
      setUser(user);

      // 최초 로그인 여부에 따라 라우팅 분기 처리
      if (isFirstLogin) {
        openModal(<SignUpSuccess />);
      } else {
        router.push(ROUTES.HOME.PATH);
      }
    },
    [router, setLogin, setUser, openModal],
  );

  const handleFailLogin = useCallback(() => {
    showErrorToast(t('로그인에 실패했습니다'), t('다시 시도해 주세요'));
    router.push(ROUTES.LOGIN.PATH);
  }, [t, router, showErrorToast]);

  const sendAuthCodeToBackend = useCallback(
    async (code: string) => {
      try {
        const loginResult = await login({ code });
        console.log('로그인 성공 :', loginResult);
        handleSuccessLogin(loginResult);
      } catch (error) {
        console.error(error);
        handleFailLogin();
      }
    },
    [handleSuccessLogin, handleFailLogin],
  );

  return { sendAuthCodeToBackend };
};

export default useGoogleLogin;
