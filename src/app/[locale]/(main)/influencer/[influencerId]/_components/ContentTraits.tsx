import { LiaJira } from 'react-icons/lia';
import { Separator } from '@/components/ui/separator';

// #20240929.syjang, 컴포넌트 정리 필요
const ContentTraits = () => {
  return (
    <ul className="flex-center">
      <li className="flex flex-1 items-center">
        <div className="flex-1 gap-0.5 flex-col-center">
          <LiaJira className="h-[22px] w-[22px] text-lime-400" />
          <div className="body2-m">독창적</div>
        </div>
        <Separator
          orientation="vertical"
          className="mx-0.5 h-[60px] w-[1px] flex-shrink-0 bg-neutral-500"
        />
      </li>
      <li className="flex flex-1 items-center">
        <div className="flex-1 gap-0.5 flex-col-center">
          <LiaJira className="h-[22px] w-[22px] text-lime-400" />
          <div className="body2-m">독창적</div>
        </div>
        <Separator
          orientation="vertical"
          className="mx-0.5 h-[60px] w-[1px] flex-shrink-0 bg-neutral-500"
        />
      </li>
      <li className="flex flex-1 items-center">
        <div className="flex-1 gap-0.5 flex-col-center">
          <LiaJira className="h-[22px] w-[22px] text-lime-400" />
          <div className="body2-m">독창적</div>
        </div>
      </li>
    </ul>
  );
};

export default ContentTraits;
