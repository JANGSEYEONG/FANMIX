import { cn } from '@/lib/utils';
import { forwardRef, HTMLAttributes } from 'react';
import { Badge } from '../ui/badge';

export interface BadgeListProps extends HTMLAttributes<HTMLUListElement> {
  contents: string[];
}

const BadgeList = forwardRef<HTMLUListElement, BadgeListProps>(
  ({ className, contents, ...props }, ref) => {
    return (
      <ul ref={ref} className={cn('flex gap-1.5', className)} {...props}>
        {contents.map((content) => (
          <Badge key={content}>{`#${content}`}</Badge>
        ))}
      </ul>
    );
  },
);

BadgeList.displayName = 'BadgeList';

export { BadgeList };
