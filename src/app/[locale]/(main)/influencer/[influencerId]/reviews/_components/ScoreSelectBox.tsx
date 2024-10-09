'use client';

import { cn } from '@/lib/utils';
import { MouseEvent } from 'react';
import { useModalStore } from '@/stores/modalStore';

import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { REVIEW_MAX_SCORE } from '@/types/domain/reviewType';

interface ScoreSelectBoxProps {
  title: string;
  defaultScore?: number;
  handleSelectScore: (selectScore: number) => void;
}
const ScoreSelectBox = ({
  title = '콘텐츠',
  defaultScore,
  handleSelectScore,
}: ScoreSelectBoxProps) => {
  const closeModal = useModalStore((state) => state.closeModal);
  const handleOutsideClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className="absolute left-0 top-0 z-20 h-full w-full animate-fadeIn bg-black/70 flex-center"
      onClick={handleOutsideClick}>
      <ScrollArea className="mx-[100px] h-72 w-full rounded-[6px] border border-neutral-600 bg-neutral-900/90 p-4 blur-22-shadow">
        <h2 className="mb-4 body1-sb">{title}</h2>
        <ul className="w-full flex-col-center body3-m">
          {[...Array(REVIEW_MAX_SCORE)].map((_, index) => (
            <li
              key={index}
              className="w-full cursor-pointer flex-col-center"
              onClick={() => handleSelectScore(index + 1)}>
              <span
                className={cn(
                  'h-9 w-full flex-center',
                  index + 1 === defaultScore && 'bg-orange-700/50',
                )}>
                {index + 1}
              </span>
              {index + 1 !== REVIEW_MAX_SCORE && <Separator className="h-[1px] bg-neutral-700" />}
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default ScoreSelectBox;
