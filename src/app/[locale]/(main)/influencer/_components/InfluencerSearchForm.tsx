'use client';

import { cn } from '@/lib/utils';
import { VscSearch } from 'react-icons/vsc';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Controller } from 'react-hook-form';

import { useTranslations } from 'next-intl';
import {
  useInfluencerSearchForm,
  type InfluencerSearchFormData,
} from '../_hooks/useInfluencerSearchForm';

interface InfluencerSearchFormProps {
  onSubmit: (data: InfluencerSearchFormData) => void;
  onError: () => void;
}
const InfluencerSearchForm = ({ onSubmit, onError }: InfluencerSearchFormProps) => {
  const t = useTranslations('influencer_index_page');
  const { register, handleSubmit, control, isValid, sortButtons } = useInfluencerSearchForm();
  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex flex-col justify-center gap-y-5">
      <div className="h-[42px] gap-x-2.5 flex-center">
        <Controller
          name="searchType"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger className="w-[82px] flex-shrink-0">
                <SelectValue placeholder="구분" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="INFLUENCER_NAME">{t('활동명')}</SelectItem>
                  <SelectItem value="TAG">{t('태그')}</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
        <div className="relative flex-1">
          <Input
            {...register('keyword')}
            className="w-full border-neutral-500 bg-neutral-900 py-[9px] pl-3 pr-10 text-white body2-r placeholder:text-neutral-300"
            placeholder={t('검색어를 입력해 주세요')}
            type="text"
            inputMode="text"
            enterKeyHint="send"
          />
          <button type="submit" className="absolute right-3 top-3">
            <VscSearch
              className={cn(
                'h-[18px] w-[18px]',
                isValid ? 'hover:scale-transition-105' : 'cursor-not-allowed opacity-50',
              )}
            />
          </button>
        </div>
      </div>
      <div
        role="group"
        aria-label="정렬 옵션"
        className="flex items-center gap-x-[15px] text-neutral-400 body3-r">
        <Controller
          name="sort"
          control={control}
          render={({ field }) => (
            <>
              {sortButtons.map((sortButton) => (
                <button
                  type="submit"
                  key={sortButton.value}
                  onClick={() => field.onChange(sortButton.value)}
                  className={cn(field.value === sortButton.value && 'text-lime-400 body3-m')}>
                  {sortButton.label}
                </button>
              ))}
            </>
          )}
        />
      </div>
    </form>
  );
};

export default InfluencerSearchForm;
