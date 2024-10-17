import { cn } from '@/lib/utils';
import { Link } from '@/i18n/routing';
import { forwardRef, HTMLAttributes } from 'react';

import { Badge } from '@/components/ui/badge';

export interface InfluencerTagListProps extends HTMLAttributes<HTMLUListElement> {
  contents: string[];
  variant?: 'outline' | 'destructive' | 'gray';
  isLinkToTagSearch?: boolean; // 인플루언서 태그 클릭 시, 해당 태그를 검색어로 하여 인플루언서 찾기 페이지로 이동
}

const InfluencerTagList = forwardRef<HTMLUListElement, InfluencerTagListProps>(
  ({ className, contents, variant = 'outline', isLinkToTagSearch = false, ...props }, ref) => {
    const Tag = isLinkToTagSearch ? LinkedTag : SimpleTag;
    return (
      <ul ref={ref} className={cn('flex flex-wrap gap-1.5', className)} {...props}>
        {contents.map((content) => (
          <Tag key={content} content={content} variant={variant} />
        ))}
      </ul>
    );
  },
);

const LinkedTag = ({
  content,
  variant,
}: {
  content: string;
  variant: InfluencerTagListProps['variant'];
}) => (
  <Link
    href={`/influencer?searchType=TAG&keyword=${encodeURIComponent(content)}`}
    className="contents">
    <Badge variant={variant}>{`#${content}`}</Badge>
  </Link>
);

const SimpleTag = ({
  content,
  variant,
}: {
  content: string;
  variant: InfluencerTagListProps['variant'];
}) => <Badge variant={variant}>{`#${content}`}</Badge>;

InfluencerTagList.displayName = 'InfluencerTagList';

export default InfluencerTagList;
