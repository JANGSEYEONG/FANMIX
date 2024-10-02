import { SheetClose } from '@/components/ui/sheet';
import BoardTypeLabel from '@/components/domain/board/BoardTypeLabel';
import { BOARD_TYPE } from '@/types/domain/boardType';

const InfluencerSearchResult = () => {
  const handleClick = () => {
    alert('인플룰언서 상세페이지로 이동');
  };
  return (
    <ul className="flex flex-col justify-center gap-y-6 h2-m">
      <li className="cursor-pointer" onClick={handleClick}>
        <SheetClose className="w-full">
          <BoardTypeLabel
            boardType={BOARD_TYPE.FAN}
            boardName="유네린"
            iconSize={22}
            className="gap-x-2.5 text-white"
          />
        </SheetClose>
      </li>
      <li className="cursor-pointer" onClick={handleClick}>
        <SheetClose className="w-full">
          <BoardTypeLabel
            boardType={BOARD_TYPE.FAN}
            boardName="유네린"
            iconSize={22}
            className="gap-x-2.5 text-white"
          />
        </SheetClose>
      </li>
      <li className="cursor-pointer" onClick={handleClick}>
        <SheetClose className="w-full">
          <BoardTypeLabel
            boardType={BOARD_TYPE.FAN}
            boardName="유네린"
            iconSize={22}
            className="gap-x-2.5 text-white"
          />
        </SheetClose>
      </li>
      <li className="cursor-pointer" onClick={handleClick}>
        <SheetClose className="w-full">
          <BoardTypeLabel
            boardType={BOARD_TYPE.FAN}
            boardName="유네린"
            iconSize={22}
            className="gap-x-2.5 text-white"
          />
        </SheetClose>
      </li>
    </ul>
  );
};

export default InfluencerSearchResult;
