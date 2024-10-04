'use client';
import { useTranslations } from 'next-intl';
import { useDeleteMyAccount } from '../_hooks/useDeleteMyAccount';

const DeleteAccountButton = () => {
  const t = useTranslations('my_page_edit_page');
  const { handleClickDeleteAccount } = useDeleteMyAccount();
  return (
    <button className="text-neutral-500 body3-r" onClick={handleClickDeleteAccount}>
      {t('회원탈퇴')}
    </button>
  );
};
export default DeleteAccountButton;
