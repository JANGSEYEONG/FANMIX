import { useRouter } from '@/i18n/routing';

const useInfluencerAction = (influencerId: string) => {
  const router = useRouter();
  // 팔로우 여부 체크 없이 팬 채널로 이동하는 함수 (팔로우 페이지에서 이동할 때 사용)
  const goToFanChannel = (communityId: string) => {
    router.push(`/fan-channel/${influencerId}/${communityId}`);
  };

  // 팔로우 함수
  const followInfluencer = () => {
    alert(influencerId + 'followInfluencer');
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
  const removeOnePickInfluencer = () => {
    alert(influencerId + 'removeOnePickInfluencer');
  };

  return {
    goToFanChannel,
    followInfluencer,
    unfollowInfluencer,
    setOnePickInfluencer,
    removeOnePickInfluencer,
  };
};

export default useInfluencerAction;
