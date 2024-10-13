'use client';

import { useCallback } from 'react';
import { useAuthCheck } from './useAuthCheck';
import { useInformationToast } from './useInformationToast';
import { useInfluencerFollowStatus, useToggleInfluencerFollow } from './queries/useFollowService';
import { useTranslations } from 'next-intl';

// 서버에서 현재 인플루언서 팔로우 상태를 가져오고, toggle하는 mutation 함수를 리턴
export const useInfluencerFollowToggle = (influencerId: number) => {
  const t = useTranslations('influencer_follow_mutations');
  const { showErrorToast } = useInformationToast();
  const { checkAuthAndProceed } = useAuthCheck();

  const {
    data: followStatus,
    isLoading: isStatusLoading,
    isError: isStatusError,
  } = useInfluencerFollowStatus({ influencerId });

  const toggleFollowMutation = useToggleInfluencerFollow();

  // 인플루언서 팔로우 상태를 토글하는 함수
  const toggleFollowState = useCallback(() => {
    if (followStatus === undefined) return;
    const newFollowState = !followStatus;

    checkAuthAndProceed(async () => {
      try {
        await toggleFollowMutation.mutateAsync({ influencerId, isFollowing: newFollowState });
      } catch {
        showErrorToast(
          t(`인플루언서 ${newFollowState ? '팔로우' : '언팔로우'}에 실패했어요`),
          t('다시 시도해 주세요'),
        );
      }
    });
  }, [t, followStatus, influencerId, checkAuthAndProceed, toggleFollowMutation, showErrorToast]);

  return {
    isFollowing: followStatus?.data,
    isLoading: isStatusLoading,
    isError: isStatusError,
    toggleFollowState,
  };
};
