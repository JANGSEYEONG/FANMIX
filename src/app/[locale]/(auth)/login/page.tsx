'use client';

import { useRouter } from '@/i18n/routing';

export default function LoginPage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <main className="h-full w-full bg-gradient">
      로그인페이지
      <button onClick={handleGoBack}>뒤로가기</button>
    </main>
  );
}
