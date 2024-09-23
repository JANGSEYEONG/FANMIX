import InfluencerThumbnail, {
  type InfluencerThumbnailProps,
} from '@/components/domain/influencer/InfluencerThumbnail';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface InfluencerShowcaseProps {
  influencers: InfluencerThumbnailProps[]; // influencerList에서 변경
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
      <ScrollBar orientation="horizontal" className="h-0" />
    </ScrollArea>
  );
};

export default InfluencerShowcase;
