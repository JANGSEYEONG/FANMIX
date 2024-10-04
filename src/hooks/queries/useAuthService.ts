import { AxiosError } from 'axios';

import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '@/stores/authStore';
import { useInformationToast } from '../useInformationToast';

import { authService } from '@/services/authService';

export const useLogout = () => {
  const setLogout = useAuthStore((state) => state.setLogout);
  const { showErrorToast } = useInformationToast();

  return useMutation<AxiosError>({
    mutationFn: authService.logout,
    onSuccess: () => {
      setLogout();

      // 로그아웃 시 홈 페이지로 리다이렉트
      window.location.href = '/';

      // 뒤로가기 방지
      window.history.pushState(null, '', window.location.href);
      window.onpopstate = function () {
        window.history.pushState(null, '', window.location.href);
      };
    },
    onError: () => {
      showErrorToast('로그아웃에 실패했어요.');
    },
  });
};

export const useDeleteAccount = () => {
  const setLogout = useAuthStore((state) => state.setLogout);
  const { showErrorToast } = useInformationToast();

  return useMutation<AxiosError>({
    mutationFn: authService.deleteMember,
    onSuccess: () => {
      setLogout();

      // 로그아웃 시 홈 페이지로 리다이렉트
      window.location.href = '/';

      // 뒤로가기 방지
      window.history.pushState(null, '', window.location.href);
      window.onpopstate = function () {
        window.history.pushState(null, '', window.location.href);
      };
    },
    onError: () => {
      showErrorToast('회원 탈퇴에 실패했어요.');
    },
  });
};
