import { FcGoogle } from 'react-icons/fc';

import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

const GoogleLoginButton = () => {
  const t = useTranslations('login_page');

  return (
    <Button className="h-[52px] w-full flex-center">
      <FcGoogle className="mr-4 h-5 w-5" />
      <span className="text-body3-r">{t('Google 계정으로 시작하기')}</span>
    </Button>
  );
};

export default GoogleLoginButton;
