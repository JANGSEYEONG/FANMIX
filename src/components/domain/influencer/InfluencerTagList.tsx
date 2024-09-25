import { cn } from '@/lib/utils';

import { forwardRef, HTMLAttributes } from 'react';
import { Badge } from '@/components/ui/badge';

export interface InfluencerTagListProps extends HTMLAttributes<HTMLUListElement> {
  contents: string[];
}

const InfluencerTagList = forwardRef<HTMLUListElement, InfluencerTagListProps>(
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

InfluencerTagList.displayName = 'InfluencerTagList';

export { InfluencerTagList };
