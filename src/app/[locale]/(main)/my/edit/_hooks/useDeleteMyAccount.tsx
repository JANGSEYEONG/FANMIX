import { useTranslations } from 'next-intl';

import { useModalStore } from '@/stores/modalStore';
import { useDeleteAccount } from '@/hooks/queries/useAuthService';
import MessageBox from '@/components/common/MessageBox';

export const useDeleteMyAccount = () => {
  const t = useTranslations('delete_account');
  const openModal = useModalStore((state) => state.openModal);
  const deleteAccountMutation = useDeleteAccount();
  const handleClickDeleteAccount = () => {
    openModal(
      <MessageBox
        title={t('탈퇴하시겠어요?')}
        description={t('탈퇴한 회원 정보는 되돌릴 수 없어요')}
        buttons={[
          {
            text: t('탈퇴하기'),
            color: 'gray',
            onClick: () => {
              deleteAccountMutation.mutate();
            },
          },
          {
            text: t('뒤로'),
            color: 'lime',
          },
        ]}
      />,
    );
  };

  return { handleClickDeleteAccount };
};
