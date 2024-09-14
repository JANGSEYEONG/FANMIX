import { useRouter } from '@/i18n/routing';

const useGoBack = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return { handleGoBack };
};

export default useGoBack;
