import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import type {
  SearchInfluencersRequest,
  SearchInfluencersResponse,
} from '@/types/service/influencerServiceType';
import { influencerService } from '@/services/influencerService';
import { useCallback, useState } from 'react';
import { isEqual } from 'lodash';

export const useSearchInfluencers = () => {
  const [searchParams, setSearchParams] = useState<SearchInfluencersRequest | null>(null);
  const query = useQuery<SearchInfluencersResponse, AxiosError>({
    queryKey: ['searchInfluencers', searchParams],
    queryFn: () => influencerService.searchInfluencers(searchParams!),
    enabled: !!searchParams,
  });

  const search = useCallback(
    (params: SearchInfluencersRequest) => {
      if (!isEqual(params, searchParams)) {
        setSearchParams(params);
        if (searchParams !== null) {
          query.refetch();
        }
      }
    },
    [searchParams, query],
  );

  return {
    ...query,
    search,
  };
};
