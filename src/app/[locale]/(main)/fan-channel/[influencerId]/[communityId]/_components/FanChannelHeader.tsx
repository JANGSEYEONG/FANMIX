import FanChannelInfoSummary from './FanChannelInfoSummary';
import FanChannelAnnouncementBanner from './FanChannelAnnouncementBanner';
import ErrorHandlingWrapper from '@/components/common/error/ErrorHandlingWrapper';
import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';

interface FanChannelHeaderProps {
  influencerId: number;
  communityId: number;
}
const FanChannelHeader = ({ influencerId, communityId }: FanChannelHeaderProps) => {
  return (
    <div>
      <ErrorHandlingWrapper
        errorFallbackMessage="인플루언서 정보를 가져오는데 실패했어요."
        errorClassName="py-8"
        suspenseFallback={<ComponentSpinner className="py-10" />}>
        <FanChannelInfoSummary influencerId={influencerId} communityId={communityId} />
      </ErrorHandlingWrapper>
      <FanChannelAnnouncementBanner />
    </div>
  );
};

export default FanChannelHeader;
