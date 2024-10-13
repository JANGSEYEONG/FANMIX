import { cn } from '@/lib/utils';

interface SortOptionsListProps {
  sortButtons: {
    label: string;
    isSelected: boolean;
    onClick: () => void;
  }[];
  className?: string;
}

const SortOptionsList = ({ sortButtons, className }: SortOptionsListProps) => {
  return (
    <ul
      aria-label="정렬 옵션"
      className={cn('flex items-center gap-x-[15px] text-neutral-400 body3-r', className)}>
      {sortButtons.map(({ label, isSelected, onClick }) => (
        <li key={label}>
          <button className={cn(isSelected && 'text-lime-400 body3-m')} onClick={onClick}>
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SortOptionsList;
