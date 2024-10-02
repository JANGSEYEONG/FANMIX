'use client';

import { useState } from 'react';
import { useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useModalStore } from '@/stores/modalStore';

import MessageBox from '@/components/common/MessageBox';

export const useFanChannelAccess = () => {
  const t = useTranslations('fan_channel_access');

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false); // 나중에 useMutation의 loading으로 돌려주기
  const openModal = useModalStore((state) => state.openModal);

  const navigateToFanChannel = (influencerId: string, communityId: string) => {
    router.push(`/fan-channel/${influencerId}/${communityId}`);
  };

  const handleFollow = async (influencerId: string, communityId: string) => {
    try {
      await alert('팔로우 api 호출하기');
      navigateToFanChannel(influencerId, communityId);
    } catch (error) {
      console.error('Follow action failed:', error);
      alert('팔로우 중 오류가 발생했습니다.');
    }
  };

  const showFollowModal = (influencerId: string, communityId: string) => {
    openModal(
      <MessageBox
        title={t('팔로우 설정 시 팬채널에 입장할 수 있어요')}
        buttons={[
          { text: t('뒤로'), color: 'gray' },
          {
            text: t('팔로우하기'),
            color: 'lime',
            onClick: () => handleFollow(influencerId, communityId),
          },
        ]}
      />,
    );
  };

  const checkFollowStatus = async (influencerId: string): Promise<boolean> => {
    // 여기에 실제 팔로우 상태를 확인하는 API 호출 로직을 구현하세요
    alert(influencerId + '번 인플루언서 팔로우 확인작업하기');
    return false; // 임시로 false 반환
  };

  const checkAccessAndNavigate = async (
    influencerId: string,
    communityId: string,
    isFollowing?: boolean,
  ) => {
    // 커뮤니티 아이디, 팔로우 여부가 있다면 팔로우 여부도 넘겨받는다.
    setIsLoading(true);

    try {
      if (isFollowing === undefined) {
        // 팔로우 상태를 모르는 경우, API를 호출하여 확인
        isFollowing = await checkFollowStatus(influencerId);
      }

      if (isFollowing) {
        // 팔로우 중인 경우, 팬 채널로 이동
        navigateToFanChannel(influencerId, communityId);
      } else {
        // 팔로우 중이 아닌 경우, 팔로우 메시지를 표시 후 이동
        showFollowModal(influencerId, communityId);
      }
    } catch (error) {
      console.error('Fan channel access check failed:', error);
      alert('오류 발생');
    } finally {
      setIsLoading(false);
    }
  };
  return { checkAccessAndNavigate, isLoading };
};
