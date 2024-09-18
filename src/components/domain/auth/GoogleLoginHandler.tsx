'use client';
import { memo, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

import useGoogleLogin from './hooks/useGoogleLogin';

const GoogleLoginHandler = () => {
  const searchParams = useSearchParams();
  const { sendAuthCodeToBackend } = useGoogleLogin();

  // useRef로 API 호출 여부 관리 (reactStrictMode로 useEffect가 2번 호출되는 상황 방지)
  const hasCalledRef = useRef(false);

  const code = searchParams.get('code');

  useEffect(() => {
    if (code && !hasCalledRef.current) {
      sendAuthCodeToBackend(code);
      hasCalledRef.current = true; // 첫 호출 후 더 이상 호출되지 않게 설정
    }
  }, [code, sendAuthCodeToBackend]);

  return null;
};

export default memo(GoogleLoginHandler);
