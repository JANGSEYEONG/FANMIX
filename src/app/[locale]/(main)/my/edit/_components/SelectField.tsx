import { cn } from '@/lib/utils';
import { ChangeEvent } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectFieldProps {
  options: { value: string; label: string }[];
  defaultValue: string;
  placeholder: string;
  updateFn: (newValue: string) => void;
}
const SelectField = ({ options, defaultValue, placeholder, updateFn }: SelectFieldProps) => {
  const handleChangeSelectField = (event: ChangeEvent<HTMLSelectElement>) => {
    updateFn(event.target.value);
  };
  return (
    <div className="relative body3-r">
      <select
        className={cn(
          'min-h-9 w-full cursor-pointer appearance-none bg-neutral-800 py-2.5 pl-3 pr-10 focus:border-none focus:outline-none focus:ring-0',
          !defaultValue && 'text-white/40',
        )}
        onChange={handleChangeSelectField}
        value={defaultValue || ''}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-neutral-400" />
    </div>
  );
};
export default SelectField;
