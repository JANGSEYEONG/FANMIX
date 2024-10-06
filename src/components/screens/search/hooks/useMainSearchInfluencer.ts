import { useSearchInfluencersByName } from '@/hooks/queries/useInfluencerService';

export const useMainSearchInfluencer = (searchTerm: string) => {
  const { data, isLoading, isError } = useSearchInfluencersByName(searchTerm);
  return { influencerResult: data, isLoading, isError };
};
