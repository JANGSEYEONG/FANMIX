'use client';

import { useTranslations } from 'next-intl';

import { useRouter } from '@/i18n/routing';
import { useCallback } from 'react';

import { useAuthStore } from '@/stores/authStore';
import { useModalStore } from '@/stores/modalStore';

import MessageBox from '@/components/common/MessageBox';

export const useAuthCheck = () => {
  const t = useTranslations('auth_check');

  const router = useRouter();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const openModal = useModalStore((state) => state.openModal);
  const showLoginModal = useCallback(() => {
    openModal(
      <MessageBox
        title={t('로그인 후 이용할 수 있어요')}
        buttons={[
          { text: t('뒤로'), color: 'gray' },
          {
            text: t('로그인 하기'),
            color: 'lime',
            onClick: () => {
              router.push('/auth/login');
            },
          },
        ]}
      />,
    );
  }, [openModal, router, t]);

  const checkAuthAndProceed = useCallback(
    (callback: () => void) => {
      if (isLoggedIn) {
        callback();
      } else {
        showLoginModal();
      }
    },
    [isLoggedIn, showLoginModal],
  );

  return { checkAuthAndProceed, isLoggedIn };
};
