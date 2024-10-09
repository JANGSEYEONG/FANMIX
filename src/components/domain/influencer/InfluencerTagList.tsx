import { cn } from '@/lib/utils';

import { forwardRef, HTMLAttributes } from 'react';
import { Badge } from '@/components/ui/badge';

export interface InfluencerTagListProps extends HTMLAttributes<HTMLUListElement> {
  contents: string[];
  variant?: 'outline' | 'destructive' | 'gray';
}

const InfluencerTagList = forwardRef<HTMLUListElement, InfluencerTagListProps>(
  ({ className, contents, variant = 'outline', ...props }, ref) => {
    return (
      <ul ref={ref} className={cn('flex flex-wrap gap-1.5', className)} {...props}>
        {contents.map((content) => (
          <Badge key={content} variant={variant}>{`#${content}`}</Badge>
        ))}
      </ul>
    );
  },
);

InfluencerTagList.displayName = 'InfluencerTagList';

export default InfluencerTagList;
