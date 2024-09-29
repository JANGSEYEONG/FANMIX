import { cn } from '@/lib/utils';
import { LiaGem } from 'react-icons/lia';
import { VscSymbolConstant } from 'react-icons/vsc';

import { BOARD_TYPE, type BoardType } from '@/types/domain/boardType';

interface BoardTypeTagProps {
  boardType: BoardType;
  boardName: string;
}

const BoardTypeTag = ({ boardName, boardType }: BoardTypeTagProps) => {
  return (
    <div
      className={cn(
        'flex items-center gap-[3px]',
        boardType === BOARD_TYPE.FAN ? 'text-lime-400' : 'text-orange-500',
      )}>
      {boardType === BOARD_TYPE.FAN ? (
        <LiaGem className="h-[18px] w-[18px]" />
      ) : (
        <VscSymbolConstant className="h-4 w-4" />
      )}

      <span className="sub1-m">{boardName}</span>
    </div>
  );
};

export default BoardTypeTag;
