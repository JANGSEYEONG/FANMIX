'use client';

import { Link } from '@/i18n/routing';

import { useTranslations } from 'next-intl';
import { useAuthStore } from '@/stores/authStore';
import { useLogout } from '@/hooks/queries/useAuthService';

import { Button } from '@/components/ui/button';
import { SheetClose } from '@/components/ui/sheet';

import { ROUTES } from '@/constants/routes';
import PageSpinner from '@/components/common/spinner/PageSpinner';

const LoginLogoutButton = () => {
  const t = useTranslations('main_slide_menu');
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const logoutMutation = useLogout();

  return (
    <>
      <SheetClose asChild className="w-full">
        {isLoggedIn ? (
          <Button className="h-[82px] w-full body2-m" onClick={() => logoutMutation.mutate()}>
            {t('로그아웃 하기')}
          </Button>
        ) : (
          <Link href={ROUTES.LOGIN.PATH}>
            <Button className="h-[82px] w-full body2-m">{t('로그인 하기')}</Button>
          </Link>
        )}
      </SheetClose>
      {logoutMutation.isPending && <PageSpinner />}
    </>
  );
};

export default LoginLogoutButton;
