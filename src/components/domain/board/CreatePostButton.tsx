'use client';
import { VscAdd } from 'react-icons/vsc';

import { useRouter } from '@/i18n/routing';
import { usePageInfoStore } from '@/stores/pageInfoStore';
import { useInformationToast } from '@/hooks/useInformationToast';

import { RouteKeys } from '@/constants/routes';

const CreatePostButton = () => {
  const {
    pageInfo: { currentPage, communityId, influencerId },
  } = usePageInfoStore();
  const router = useRouter();
  const { showConfirmToast } = useInformationToast();

  const handleClickNewPost = () => {
    if (currentPage === RouteKeys.FAN_CHANNEL && influencerId && communityId) {
      router.push(`/fan-channel/${influencerId}/${communityId}/new`);
    } else if (currentPage === RouteKeys.COMMUNITY || currentPage === RouteKeys.COMMUNITY_INDEX) {
      router.push(`/community/new`);
    } else {
      showConfirmToast('잘못된 접근이에요.');
    }
  };
  return (
    <button
      aria-label="글쓰기 버튼"
      className="absolute right-5 top-[-84px] h-[60px] w-[60px] rounded-full flex-center fanmix-gradient blur-10-shadow"
      onClick={handleClickNewPost}>
      <VscAdd className="h-[22px] w-[22px]" />
    </button>
  );
};
export default CreatePostButton;
