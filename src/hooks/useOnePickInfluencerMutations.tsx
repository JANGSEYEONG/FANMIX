import { useTranslations } from 'next-intl';
import { useModalStore } from '@/stores/modalStore';
import { useUpdateOnePickInfluencer } from './queries/useInfluencerService';

import MessageBox from '@/components/common/MessageBox';
import { useInformationToast } from './useInformationToast';

export const useOnePickInfluencerMutations = (influencerId: number) => {
  const t = useTranslations('onepick_influencer_mutations');
  const openModal = useModalStore((state) => state.openModal);

  const updateOnePickMutation = useUpdateOnePickInfluencer();
  const { showConfirmToast, showErrorToast } = useInformationToast();
  // 원픽 지정하는 함수
  const setOnePickInfluencer = async () => {
    try {
      await updateOnePickMutation.mutateAsync({ influencerId, onePick: 1 });
      showConfirmToast(t('ONE PICK 인플루언서가 설정되었어요'));
    } catch {
      showErrorToast(t('ONE PICK 인플루언서 설정에 실패했어요'), t('다시 시도해 주세요'));
    }
  };

  // 원픽 해제하는 함수
  const removeOnePickInfluencer = async () => {
    try {
      await updateOnePickMutation.mutateAsync({ influencerId, onePick: 0 });
      showConfirmToast(t('ONE PICK 인플루언서가 해제되었어요'));
    } catch {
      showErrorToast(t('ONE PICK 인플루언서 해제에 실패했어요'), t('다시 시도해 주세요'));
    }
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
