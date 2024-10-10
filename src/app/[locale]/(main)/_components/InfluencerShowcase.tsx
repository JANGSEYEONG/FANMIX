import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import InfluencerThumbnail from './InfluencerThumbnail';

interface InfluencerShowcaseProps {
  influencers: {
    influencerId: number;
    influencerName: string;
    influencerImageUrl: string;
    isAuthenticated: boolean;
  }[];
}

const InfluencerShowcase = ({ influencers }: InfluencerShowcaseProps) => {
  return (
    <ScrollArea className="w-full">
      <ul className="flex gap-1">
        {influencers.map((influencer) => (
          <li key={influencer.influencerId}>
            <InfluencerThumbnail {...influencer} />
          </li>
        ))}
      </ul>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default InfluencerShowcase;
