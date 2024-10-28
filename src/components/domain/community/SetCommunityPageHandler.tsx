'use client';
import { useEffect } from 'react';
import { RouteKeys } from '@/constants/routes';
import { usePageInfoStore } from '@/stores/pageInfoStore';

interface SetCommunityPageHandlerProps {
  communityId: number | null;
  isCommunityIndexPage?: boolean;
}
const SetCommunityPageHandler = ({
  communityId,
  isCommunityIndexPage,
}: SetCommunityPageHandlerProps) => {
  const setPageInfo = usePageInfoStore((state) => state.setPageInfo);
  useEffect(() => {
    setPageInfo({
      currentPage: isCommunityIndexPage ? RouteKeys.COMMUNITY_INDEX : RouteKeys.COMMUNITY,
      communityId: communityId,
      influencerId: null,
      influencerName: null,
    });
  }, [communityId, isCommunityIndexPage, setPageInfo]);

  return null;
};
export default SetCommunityPageHandler;
