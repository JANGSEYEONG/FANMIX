'use client';

import { cn } from '@/lib/utils';
import { useModalStore } from '@/stores/modalStore';

type ActionButtonColor = 'lime' | 'orange' | 'gray' | 'white';

interface ActionButtonConfig {
  text: string;
  color: ActionButtonColor;
  onClick?: () => void;
}

interface MessageBoxProps {
  title: string;
  description?: string;
  layout?: 'horizontal' | 'vertical';
  buttons: ActionButtonConfig[];
}

const MessageBox = ({ title, description, layout = 'horizontal', buttons }: MessageBoxProps) => {
  const hasDescription = !!description; // description이 존재하면 title, description 분리, 없으면 title이 곧 내용
  const isHorizontal = layout === 'horizontal';
  const buttonTotalLength = buttons.length;
  return (
    <div className="absolute left-0 top-0 z-20 h-full w-full flex-center">
      <div className="w-[270px] animate-fadeIn border border-neutral-600 bg-neutral-900/90 opacity-0 blur-10">
        <section className="gap-[2px] p-4 flex-col-center">
          <h1
            className={cn(
              'whitespace-pre-wrap text-center text-white',
              hasDescription ? 'body1-sb' : 'body1-m',
            )}>
            {title}
          </h1>
          {hasDescription && (
            <p className="overflow-wrap-anywhere whitespace-pre-wrap break-words text-center text-neutral-200 body3-r">
              {description}
            </p>
          )}
        </section>
        <section
          className={cn(
            'w-full border-t-[0.5px] border-neutral-600 body1-sb',
            isHorizontal ? 'flex' : 'flex-col-center',
          )}>
          {buttons.map((button, index) => (
            // 마지막 버튼이 아닐 경우에 버튼 사이 구분선 그리기
            <ActionButton
              key={index}
              {...button}
              hasRightLine={isHorizontal && index != buttonTotalLength - 1}
              hasBottomLine={!isHorizontal && index != buttonTotalLength - 1}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

interface ActionButtonProps extends ActionButtonConfig {
  hasBottomLine?: boolean;
  hasRightLine?: boolean;
}
const ActionButton = ({
  text,
  color,
  onClick,
  hasBottomLine = false,
  hasRightLine = false,
}: ActionButtonProps) => {
  const closeModal = useModalStore((state) => state.closeModal);
  const getTextClass = (variant: ActionButtonConfig['color']) => {
    switch (variant) {
      case 'lime':
        return 'text-lime-400';
      case 'orange':
        return 'text-orange-600';
      case 'white':
        return 'text-white';
      case 'gray':
        return 'text-neutral-300 body1-m';
      default:
        return '';
    }
  };
  const textClass = getTextClass(color);
  const handleClickButton = () => {
    // 버튼 클릭 시, 모달을 닫고 콜백함수 실행
    closeModal();
    // callback이 있는 경우에만 실행
    if (onClick) onClick();
  };
  return (
    <button
      onClick={handleClickButton}
      className={cn(
        'h-12 w-full transition-colors duration-150 flex-center hover:bg-neutral-950/80 focus:bg-black/50',
        textClass,
        hasBottomLine && 'border-b-[0.5px] border-neutral-600',
        hasRightLine && 'border-r-[0.5px] border-neutral-600',
      )}>
      {text}
    </button>
  );
};

export default MessageBox;
