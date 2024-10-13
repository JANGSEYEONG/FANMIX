import { useTranslations } from 'next-intl';
import { useInformationToast } from './useInformationToast';
import {
  useInfluencerFollowStatusMutation,
  useToggleInfluencerFollow,
} from './queries/useFollowService';

/**
 * 팔로우 설정, 팔로우 해제, 팔로우 상태 확인 mutation return
 */
export const useInfluencerFollowMutations = () => {
  const t = useTranslations('influencer_follow_mutations');

  const { showErrorToast } = useInformationToast();

  const toggleFollowMutation = useToggleInfluencerFollow();
  const getFollowStatusMutation = useInfluencerFollowStatusMutation();

  const handleInfluencerFollow = async (influencerId: number, onSuccess?: () => void) => {
    try {
      await toggleFollowMutation.mutateAsync({ influencerId, isFollowing: true });
      if (onSuccess) onSuccess();
    } catch {
      showErrorToast(t('인플루언서 팔로우에 실패했어요'), t('다시 시도해 주세요'));
    }
  };

  const handleInfluencerUnfollow = async (influencerId: number) => {
    try {
      await toggleFollowMutation.mutateAsync({ influencerId, isFollowing: false });
    } catch {
      showErrorToast(t('인플루언서 언팔로우에 실패했어요'), t('다시 시도해 주세요'));
    }
  };

  const checkInfluencerFollowStatus = async (influencerId: number): Promise<boolean | null> => {
    try {
      const data = await getFollowStatusMutation.mutateAsync({ influencerId });
      return data.data;
    } catch {
      showErrorToast(t('팔로우 상태를 확인하는데 실패했어요'), t('다시 시도해 주세요'));
      return null;
    }
  };

  return {
    handleInfluencerFollow,
    handleInfluencerUnfollow,
    checkInfluencerFollowStatus,
  };
};
