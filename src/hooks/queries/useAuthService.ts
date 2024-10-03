import { AxiosError } from 'axios';

import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '@/stores/authStore';
import { useInformationToast } from '../useInformationToast';

import { authService } from '@/services/authService';

export const useLogout = () => {
  const setLogout = useAuthStore((state) => state.setLogout);
  const { showConfirmToast, showErrorToast } = useInformationToast();

  return useMutation<AxiosError>({
    mutationFn: authService.logout,
    onSuccess: () => {
      setLogout();
      showConfirmToast('로그아웃 되었습니다.');

      // 로그아웃 시 홈 페이지로 리다이렉트
      window.location.href = '/';

      // 뒤로가기 방지
      window.history.pushState(null, '', window.location.href);
      window.onpopstate = function () {
        window.history.pushState(null, '', window.location.href);
      };
    },
    onError: (error) => {
      console.error('로그아웃 실패:', error);
      showErrorToast('로그아웃에 실패했습니다.');
    },
  });
};
