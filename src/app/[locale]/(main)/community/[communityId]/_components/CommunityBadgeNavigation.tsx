'use client';
import { useRouter } from '@/i18n/routing';
import CommunityBadgeList from '@/components/domain/community/CommunityBadgeList';

interface CommunityBadgeNavigationProps {
  communityId: number;
}

const CommunityBadgeNavigation = ({ communityId }: CommunityBadgeNavigationProps) => {
  const router = useRouter();
  const handleSelectCommunity = (selectCommunityId: number) => {
    router.push(`/community/${selectCommunityId}`);
  };
  return (
    <nav className="my-5">
      <CommunityBadgeList
        selectedCommunityId={communityId}
        handleSelectCommunity={handleSelectCommunity}
      />
    </nav>
  );
};

export default CommunityBadgeNavigation;
