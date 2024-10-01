import { cn } from '@/lib/utils';
import { VscPassFilled } from 'react-icons/vsc';

interface AuthenticatedBadgeProps {
  size: number;
  className?: string;
}
const AuthenticatedBadge = ({ size, className }: AuthenticatedBadgeProps) => {
  return (
    <div className={cn('relative inline-block', className)}>
      {/* 체크 표시 검정색으로 채우기용 태그 */}
      <div className="absolute inset-1 rounded-full bg-black" />
      <VscPassFilled
        className="relative text-lime-400"
        style={{ height: `${size}px`, width: `${size}px` }}
      />
    </div>
  );
};
export default AuthenticatedBadge;
