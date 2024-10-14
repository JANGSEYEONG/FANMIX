import { useTranslations } from 'use-intl';
import { useInformationToast } from './useInformationToast';

export const useComingSoonToast = () => {
  const t = useTranslations('coming_soon_toast');
  const { showConfirmToast } = useInformationToast();
  const showComingSoonToast = () => {
    showConfirmToast(t('업데이트를 기다려주세요'), t('곧 멋진 기능으로 찾아뵙겠습니다'));
  };
  return { showComingSoonToast };
};
