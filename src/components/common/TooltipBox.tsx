import { VscInfo } from 'react-icons/vsc';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

interface TooltipBoxProps {
  content: string;
}
const TooltipBox = ({ content }: TooltipBoxProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <VscInfo className="h-4 w-4" />
      </PopoverTrigger>
      <PopoverContent className="body3-r">{content}</PopoverContent>
    </Popover>
  );
};

export default TooltipBox;
