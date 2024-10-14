import { useUserDetail } from '@/hooks/queries/useUserService';

export const useOtherUserProfile = (userId: number) => {
  const { data, isLoading, isError } = useUserDetail({ userId });

  return {
    userData: data?.data,
    isLoading,
    isError,
  };
};
