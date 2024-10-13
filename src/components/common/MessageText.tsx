import { cn } from '@/lib/utils';

interface MessageTextProps {
  message: string;
  className?: string;
}

const MessageText = ({ message, className }: MessageTextProps) => {
  return (
    <p
      className={cn(
        'whitespace-pre-wrap text-center text-neutral-500 flex-center body3-r',
        className,
      )}>
      {message}
    </p>
  );
};

export default MessageText;
