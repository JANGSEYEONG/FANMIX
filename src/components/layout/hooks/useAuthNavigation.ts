'use client';

import { useRouter } from '@/i18n/routing';
import { useAuthCheck } from '@/hooks/useAuthCheck';

export const useAuthNavigation = () => {
  const { checkAuthAndProceed } = useAuthCheck();
  const router = useRouter();
  const navigateWithAuthCheck = (path: string) => {
    checkAuthAndProceed(() => {
      router.push(path);
    });
  };

  return { navigateWithAuthCheck };
};
