'use client';

import { useGoBack } from '@/hooks/useGoBack';
import { useTranslations } from 'next-intl';
import { VscChevronLeft, VscChromeClose } from 'react-icons/vsc';

interface GoBackButtonProps {
  variant: 'close' | 'word' | 'prev';
}
const GoBackButton = ({ variant = 'close' }: GoBackButtonProps) => {
  const { handleGoBack } = useGoBack();
  const t = useTranslations('login_page');

  if (variant === 'word') {
    return (
      <button className="text-neutral-200 body3-r" onClick={handleGoBack}>
        {t('뒤로가기')}
      </button>
    );
  } else if (variant === 'prev') {
    return (
      <VscChevronLeft
        onClick={handleGoBack}
        className="mr-1 h-6 w-6 text-neutral-300 hover:scale-transition-105"
      />
    );
  } else {
    return <VscChromeClose className="h-6 w-6 hover:scale-transition-105" onClick={handleGoBack} />;
  }
};

export default GoBackButton;
