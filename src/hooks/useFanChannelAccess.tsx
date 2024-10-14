'use client';

import { useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import { useAuthCheck } from './useAuthCheck';
import { useModalStore } from '@/stores/modalStore';
import { useComingSoonToast } from './useComingSoonToast';
import { useInformationToast } from './useInformationToast';
import { useInfluencerFollowMutations } from './useInfluencerFollowMutations';

import MessageBox from '@/components/common/MessageBox';

export const useFanChannelAccess = () => {
  const t = useTranslations('fan_channel_access');
  const { showComingSoonToast } = useComingSoonToast();

  const router = useRouter();
  const openModal = useModalStore((state) => state.openModal);
  const { showConfirmToast, showErrorToast } = useInformationToast();
  const { checkAuthAndProceed } = useAuthCheck();
  const { handleInfluencerFollow, checkInfluencerFollowStatus } = useInfluencerFollowMutations();

  // 커뮤니티 아이디, 팔로우 여부가 있다면 팔로우 여부도 넘겨받는다.
  // 1. 로그인 여부 체크, 2. 팔로우 여부 체크, 3. 팬채널 이동
  const checkAccessAndNavigateToFanChannel = (
    influencerId: number,
    communityId: number | null,
    isFollowing?: boolean | null,
  ) => {
    // 로그인 상태가 아니라면, 로그인 유도 메시지창을 띄운다.
    checkAuthAndProceed(async () => {
      // 팬채널이 생성되지 않은 인증 인플루언서의 경우때문에 한번 체크
      if (!communityId) {
        showConfirmToast(
          t('아직 팬채널이 생성되지 않았어요'),
          t('관리자 승인 후 생성될 예정이에요'),
        );
        return;
      }

      try {
        if (isFollowing === undefined) {
          // 팔로우 상태를 모르는 경우, API를 호출하여 확인
          isFollowing = await checkInfluencerFollowStatus(influencerId);
          if (isFollowing === null) {
            return;
          }
        }

        if (isFollowing) {
          // 팔로우 중인 경우, 팬 채널로 이동
          navigateToFanChannel(influencerId, communityId);
        } else {
          // 팔로우 중이 아닌 경우, 팔로우 메시지를 표시 후 이동
          showFollowModal(influencerId, communityId);
        }
      } catch {
        showErrorToast(t('팬채널로 이동하는데 실패했어요'), t('다시 시도해 주세요'));
      }
    });
  };

  const navigateToFanChannel = (influencerId: number, communityId: number) => {
    showComingSoonToast();
    return;
    router.push(`/fan-channel/${influencerId}/${communityId}`);
  };

  const showFollowModal = (influencerId: number, communityId: number) => {
    openModal(
      <MessageBox
        title={t('팔로우 설정 시 팬채널에 입장할 수 있어요')}
        buttons={[
          { text: t('뒤로'), color: 'gray' },
          {
            text: t('팔로우하기'),
            color: 'lime',
            onClick: () => {
              handleInfluencerFollow(influencerId, () => {
                navigateToFanChannel(influencerId, communityId);
              });
            },
          },
        ]}
      />,
    );
  };

  return { checkAccessAndNavigateToFanChannel };
};
