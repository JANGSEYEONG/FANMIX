import MessageBox from '@/components/common/MessageBox';
import { useRouter } from '@/i18n/routing';
import { useModalStore } from '@/stores/modalStore';
import { useTranslations } from 'next-intl';

export const useInfluencerAction = (influencerId: number) => {
  const t = useTranslations('influencer_actions');
  const router = useRouter();
  const openModal = useModalStore((state) => state.openModal);

  // 팔로우 여부 체크 없이 팬 채널로 이동하는 함수 (팔로우 페이지에서 이동할 때 사용)
  const goToFanChannel = (communityId: number) => {
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

  // 메시지로 확인받고 원픽 해제하는 함수
  const removeOnePickInfluencerWithMessage = () => {
    openModal(
      <MessageBox
        title={t('원픽 인플루언서를 해제할까요?')}
        description={t('해제 후 팔로우 탭에서 다시 지정할 수 있어요')}
        buttons={[
          { text: t('취소'), color: 'gray' },
          { text: t('해제하기'), color: 'lime', onClick: removeOnePickInfluencer },
        ]}
      />,
    );
  };

  return {
    goToFanChannel,
    followInfluencer,
    unfollowInfluencer,
    setOnePickInfluencer,
    removeOnePickInfluencer,
    removeOnePickInfluencerWithMessage,
  };
};
