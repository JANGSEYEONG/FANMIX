'use client';

import { FcGoogle } from 'react-icons/fc';

import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

const GoogleLoginButton = () => {
  const t = useTranslations('login_page');

  const googleAuthParams = new URLSearchParams({
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
    redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI as string,
    response_type: 'code',
    scope:
      'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
    access_type: 'offline',
  });

  const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${googleAuthParams.toString()}`;

  return (
    <a href={googleLoginUrl} className="h-[52px] w-full flex-center">
      <Button className="h-full w-full">
        <FcGoogle className="mr-4 h-5 w-5" />
        <span className="text-body3-r">{t('Google 계정으로 시작하기')}</span>
      </Button>
    </a>
  );
};

export default GoogleLoginButton;
