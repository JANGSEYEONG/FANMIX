'use client';

import { useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import { useCallback } from 'react';
import { useAuthCheck } from './useAuthCheck';
import { useModalStore } from '@/stores/modalStore';
import { useInformationToast } from './useInformationToast';
import { useInfluencerFollowStatus, useToggleInfluencerFollow } from './queries/useFollowService';

import MessageBox from '@/components/common/MessageBox';

// 서버에서 현재 인플루언서 팔로우 상태를 가져오고, toggle하는 mutation 함수를 리턴
export const useInfluencerFollowToggle = (influencerId: number, isInFanChannel: boolean) => {
  const t = useTranslations('influencer_follow_mutations');

  const router = useRouter();
  const openModal = useModalStore((state) => state.openModal);

  const { showErrorToast } = useInformationToast();
  const { checkAuthAndProceed } = useAuthCheck();

  const { data: followStatus } = useInfluencerFollowStatus({ influencerId });

  const toggleFollowMutation = useToggleInfluencerFollow();

  const handleFollowError = useCallback(
    (isFollowing: boolean) => {
      showErrorToast(
        t(`인플루언서 ${isFollowing ? '팔로우' : '언팔로우'}에 실패했어요`),
        t('다시 시도해 주세요'),
      );
    },
    [showErrorToast, t],
  );

  const performToggle = useCallback(
    async (newFollowState: boolean) => {
      try {
        await toggleFollowMutation.mutateAsync({ influencerId, isFollowing: newFollowState });
        if (!newFollowState && isInFanChannel) {
          router.push('/');
        }
      } catch {
        handleFollowError(newFollowState);
      }
    },
    [toggleFollowMutation, influencerId, router, handleFollowError, isInFanChannel],
  );

  const showUnfollowConfirmation = useCallback(() => {
    openModal(
      <MessageBox
        title={t('팔로우를 해제하시겠어요?')}
        description={t('팬채널에서 팔로우 해제 시 메인 페이지로 이동합니다')}
        buttons={[
          { text: t('취소'), color: 'gray' },
          {
            text: t('해제하기'),
            color: 'lime',
            onClick: () => performToggle(false),
          },
        ]}
      />,
    );
  }, [t, openModal, performToggle]);

  // 인플루언서 팔로우 상태를 토글하는 함수
  const toggleFollowState = useCallback(() => {
    if (followStatus === undefined) return;
    const newFollowState = !followStatus;

    checkAuthAndProceed(() => {
      if (!newFollowState && isInFanChannel) {
        showUnfollowConfirmation();
      } else {
        performToggle(newFollowState);
      }
    });
  }, [followStatus, checkAuthAndProceed, isInFanChannel, showUnfollowConfirmation, performToggle]);

  return {
    isFollowing: followStatus?.data,
    toggleFollowState,
  };
};
