'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/stores/authStore';
import { useLogout } from '@/hooks/queries/useAuthService';

import PageSpinner from '@/components/common/spinner/PageSpinner';

const LogoutHandler = () => {
  const logoutMutation = useLogout();

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      logoutMutation.mutate();
    }
  }, [isLoggedIn, logoutMutation]);

  if (logoutMutation.isPending) {
    return <PageSpinner />;
  }
  return null;
};
export default LogoutHandler;
