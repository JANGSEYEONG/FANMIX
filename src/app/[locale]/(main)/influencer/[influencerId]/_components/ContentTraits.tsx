import { LiaJira } from 'react-icons/lia';
import { Separator } from '@/components/ui/separator';

// #20240929.syjang, 컴포넌트 정리 필요
const ContentTraits = () => {
  return (
    <ul className="gap-0.5 flex-center">
      <li className="gap-0.5x flex-1 flex-col-center">
        <LiaJira className="h-[22px] w-[22px] text-lime-400" />
        <div className="body2-m">독창적</div>
      </li>
      <Separator orientation="vertical" className="h-[60px] w-[1px] bg-neutral-500" />
      <li className="gap-0.5x flex-1 flex-col-center">
        <LiaJira className="h-[22px] w-[22px] text-lime-400" />
        <div className="body2-m">독창적</div>
      </li>
      <Separator orientation="vertical" className="h-[60px] w-[1px] bg-neutral-500" />
      <li className="gap-0.5x flex-1 flex-col-center">
        <LiaJira className="h-[22px] w-[22px] text-lime-400" />
        <div className="body2-m">독창적</div>
      </li>
    </ul>
  );
};

export default ContentTraits;
