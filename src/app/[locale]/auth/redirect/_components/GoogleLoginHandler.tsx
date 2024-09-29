'use client';
import { memo, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

import useGoogleLogin from '../_hooks/useGoogleLogin';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from '@/i18n/routing';

const GoogleLoginHandler = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { sendAuthCodeToBackend } = useGoogleLogin();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  // useRef로 API 호출 여부 관리 (reactStrictMode로 useEffect가 2번 호출되는 상황 방지)
  const hasCalledRef = useRef(false);

  const code = searchParams.get('code');

  useEffect(() => {
    if (isLoggedIn) {
      // 이미 로그인한 상태라면 메인 페이지로 리다이렉트
      router.push('/');
    } else if (code && !hasCalledRef.current) {
      sendAuthCodeToBackend(code);
      hasCalledRef.current = true; // 첫 호출 후 더 이상 호출되지 않게 설정
    }
  }, [code, sendAuthCodeToBackend, isLoggedIn, router]);

  return null;
};

export default memo(GoogleLoginHandler);
