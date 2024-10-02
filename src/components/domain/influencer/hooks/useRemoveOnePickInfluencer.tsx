'use client';

import { useModalStore } from '@/stores/modalStore';

import MessageBox from '@/components/common/MessageBox';
import useInfluencerAction from '@/hooks/useInfluencerAction';
import { useTranslations } from 'next-intl';

const useRemoveOnePickWithMessage = (influencerId: string) => {
  const { removeOnePickInfluencer } = useInfluencerAction(influencerId);
  const t = useTranslations('one_pick_influencer');
  const openModal = useModalStore((state) => state.openModal);

  const handleRemoveOnePickWithMessage = () => {
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

  return { handleRemoveOnePickWithMessage };
};

export default useRemoveOnePickWithMessage;
