import { useTranslations } from 'next-intl';
import { useModalStore } from '@/stores/modalStore';

import MessageBox from '@/components/common/MessageBox';

export const useOnePickInfluencerMutations = (influencerId: number) => {
  const t = useTranslations('influencer_actions');
  const openModal = useModalStore((state) => state.openModal);

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
    setOnePickInfluencer,
    removeOnePickInfluencer,
    removeOnePickInfluencerWithMessage,
  };
};
