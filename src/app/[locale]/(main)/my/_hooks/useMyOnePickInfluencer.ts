import { useUserStore } from '@/stores/userStore';
import { useUserOnePickInfluencer } from '@/hooks/queries/useInfluencerService';

export const useMyOnePickInfluencer = () => {
  const user = useUserStore((state) => state.user);
  const { data, isLoading, isError } = useUserOnePickInfluencer({ userId: user?.userId || 0 });

  return {
    onePickData: data?.data,
    isLoading,
    isError,
  };
};
