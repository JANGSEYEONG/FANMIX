import FanChannelInfoSummary from './FanChannelInfoSummary';
import FanChannelAnnouncementBanner from './FanChannelAnnouncementBanner';

interface FanChannelHeaderProps {
  influencerId: number;
}
const FanChannelHeader = ({ influencerId }: FanChannelHeaderProps) => {
  return (
    <div>
      <FanChannelInfoSummary influencerId={influencerId} />
      <FanChannelAnnouncementBanner />
    </div>
  );
};

export default FanChannelHeader;
