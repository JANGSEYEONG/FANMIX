import { useRouter } from '@/i18n/routing';

const useInfluencerAction = (influencerId: string, communityId: string) => {
  const router = useRouter();
  // 팬 채널로 이동하는 함수
  const goToFanChannel = () => {
    router.push(`/fan-channel/${communityId}`);
  };

  // 팔로우 취소하는 함수
  const unfollowInfluencer = () => {
    alert(influencerId + 'unfollowInfluencer');
  };

  // 원픽 지정하는 함수
  const setOnePickInfluencer = () => {
    alert(influencerId + 'setOnePickInfluencer');
  };

  // 원픽 해제하는 함수
  const removeOnePickInfluencer = async () => {
    alert(influencerId + 'removeOnePickInfluencer');
  };

  return {
    goToFanChannel,
    unfollowInfluencer,
    setOnePickInfluencer,
    removeOnePickInfluencer,
  };
};

export default useInfluencerAction;
