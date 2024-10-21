import { formatNumber } from '@/lib/text';
import { VscEye } from 'react-icons/vsc';

interface ViewStatProps {
  viewCount: number;
}

const ViewStat = ({ viewCount }: ViewStatProps) => {
  return (
    <span className="text-sub2-m gap-x-0.5 text-neutral-300 flex-center sub2-m">
      <span>{formatNumber(viewCount)}</span>
      <VscEye className="h-3 w-3" />
    </span>
  );
};

export default ViewStat;
