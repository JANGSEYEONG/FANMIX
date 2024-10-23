'use client';

import { useRouter } from '@/i18n/routing';
import { useAuthCheck } from '@/hooks/useAuthCheck';

export const useAuthNavigation = () => {
  const router = useRouter();
  const { checkAuthAndProceed } = useAuthCheck();

  const navigateWithAuthCheck = (path: string, requireAuth: boolean) => {
    if (requireAuth) {
      checkAuthAndProceed(() => {
        router.push(path);
      });
    } else {
      router.push(path);
    }
  };

  return { navigateWithAuthCheck };
};
