'use client';

import { useCallback } from 'react';
import { useToast } from './useToast';

/**
 * 지정 콜백 함수가 없는 정보성 토스트 메시지
 * @returns showConfirmToast, showErrorToast
 */
const useInformationToast = () => {
  const { toast } = useToast();

  const showConfirmToast = useCallback(
    (title: string, description?: string) => {
      toast({
        duration: 2000,
        title,
        description,
      });
    },
    [toast],
  );

  const showErrorToast = useCallback(
    (title: string, description?: string) => {
      toast({
        duration: 2000,
        variant: 'destructive',
        title,
        description,
      });
    },
    [toast],
  );

  return { showConfirmToast, showErrorToast };
};

export default useInformationToast;
