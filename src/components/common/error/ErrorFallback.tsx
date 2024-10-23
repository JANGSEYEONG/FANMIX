import { cn } from '@/lib/utils';
import MessageText from '../MessageText';
import { LiaRedoAltSolid } from 'react-icons/lia';

export interface ErrorFallbackProps {
  error: Error | null;
  resetErrorBoundary: () => void;
  message: string;
  className?: string;
}
const ErrorFallback = ({ message, resetErrorBoundary, className }: ErrorFallbackProps) => {
  return (
    <div className={cn('gap-y-4 flex-col-center', className)}>
      <MessageText message={message} />
      <button onClick={resetErrorBoundary}>
        <LiaRedoAltSolid className="h-5 w-5 text-neutral-300 hover:scale-transition-110" />
      </button>
    </div>
  );
};

export default ErrorFallback;
