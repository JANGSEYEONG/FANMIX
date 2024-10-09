import { AxiosError } from 'axios';

import { useMutation } from '@tanstack/react-query';
import { useInformationToast } from '../useInformationToast';

import { authService } from '@/services/authService';
import { useRouter } from '@/i18n/routing';
import { useAuthStore } from '@/stores/authStore';
import { useTranslations } from 'next-intl';

export const useLogout = () => {
  const t = useTranslations('api_result');
  const { showConfirmToast, showErrorToast } = useInformationToast();
  const setLogout = useAuthStore((state) => state.setLogout);
  return useMutation<AxiosError>({
    mutationFn: authService.logout,
    onSuccess: () => {
      // 서버 로그아웃 성공 여부와 별개로 클라이언트는 로그아웃 처리
      setLogout();
      showConfirmToast(t('로그아웃에 성공했어요'));
    },
    onError: () => {
      // 서버 로그아웃 성공 여부와 별개로 클라이언트는 로그아웃 처리
      setLogout();
      showErrorToast(t('로그아웃에 실패했어요'));
    },
  });
};

export const useDeleteAccount = () => {
  const router = useRouter();
  const { showErrorToast } = useInformationToast();

  return useMutation<AxiosError>({
    mutationFn: authService.deleteMember,
    onSuccess: () => {
      router.push('/?isLogout=true');
    },
    onError: () => {
      showErrorToast('회원 탈퇴에 실패했어요.');
    },
  });
};
