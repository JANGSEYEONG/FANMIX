import { useInformationToast } from '@/hooks/useInformationToast';

export const useSendDirectMessage = () => {
  const { showConfirmToast } = useInformationToast();
  const handleClickSendDirectMessage = () => {
    showConfirmToast('DM 기능은 준비중 이에요.', '업데이트를 기다려주세요.');
  };

  return {
    handleClickSendDirectMessage,
  };
};
