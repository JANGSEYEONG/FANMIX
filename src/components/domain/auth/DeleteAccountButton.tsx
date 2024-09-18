import { useTranslations } from 'next-intl';

const DeleteAccountButton = () => {
  const t = useTranslations('my_page_edit_page');

  return <button className="text-body3-r text-neutral-500">{t('회원탈퇴')}</button>;
};
export default DeleteAccountButton;
