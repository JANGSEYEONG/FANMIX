'use client';
import { useUserStore } from '@/stores/userStore';

import OnePickInfluencer from '@/components/domain/influencer/OnePickInfluencer';
import { useUserOnePickInfluencer } from '@/hooks/queries/useInfluencerService';

const MyOnePickInfluencer = () => {
  const user = useUserStore((state) => state.user);
  const { data: onePickData } = useUserOnePickInfluencer({ userId: user?.userId || 0 });

  if (!onePickData?.data) return null;

  return (
    <OnePickInfluencer {...onePickData.data} communityId={onePickData.data.fanChannelId || null} />
  );
};

export default MyOnePickInfluencer;
