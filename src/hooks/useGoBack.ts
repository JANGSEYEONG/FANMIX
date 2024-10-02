import { useRouter } from '@/i18n/routing';

export const useGoBack = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return { handleGoBack };
};
