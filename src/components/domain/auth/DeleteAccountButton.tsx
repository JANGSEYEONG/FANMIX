import { useTranslations } from 'next-intl';

const DeleteAccountButton = () => {
  const t = useTranslations('my_page_edit_page');

  return <button className="text-neutral-500 body3-r">{t('회원탈퇴')}</button>;
};
export default DeleteAccountButton;
