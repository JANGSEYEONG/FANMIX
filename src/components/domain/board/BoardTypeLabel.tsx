import { cn } from '@/lib/utils';
import { LiaGem } from 'react-icons/lia';
import { VscSymbolConstant } from 'react-icons/vsc';

import { BOARD_TYPE, type BoardType } from '@/types/domain/boardType';

interface BoardTypeLabelProps {
  boardType: BoardType;
  boardName: string;
  iconSize: number;
  className: string;
}

const BoardTypeLabel = ({ boardName, boardType, iconSize, className }: BoardTypeLabelProps) => {
  return (
    <div
      className={cn(
        'flex items-center',
        boardType === BOARD_TYPE.FAN ? 'text-lime-400' : 'text-orange-500',
        className,
      )}>
      {boardType === BOARD_TYPE.FAN ? (
        <LiaGem
          className="text-lime-400"
          style={{ height: `${iconSize}px`, width: `${iconSize}px` }}
        />
      ) : (
        <VscSymbolConstant
          className="text-orange-500"
          style={{ height: `${iconSize}px`, width: `${iconSize}px` }}
        />
      )}
      <span>{boardName}</span>
    </div>
  );
};

export default BoardTypeLabel;
