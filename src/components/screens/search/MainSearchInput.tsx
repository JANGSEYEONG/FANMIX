import { Input } from '@/components/ui/input';
import { useTranslations } from 'next-intl';
import { VscSearch } from 'react-icons/vsc';

interface MainSearchInputProps {
  searchTerm: string;
  handleSearch: (value: string) => void;
}

const MainSearchInput = ({ searchTerm, handleSearch }: MainSearchInputProps) => {
  const t = useTranslations('main_search');
  return (
    <div className="relative w-full">
      <Input
        className="h-11 w-full border-neutral-300 bg-neutral-900 py-[13px] pl-10 pr-3 text-white body2-r placeholder:text-neutral-500"
        placeholder={t('인플루언서 / 커뮤니티 검색')}
        type="text"
        inputMode="text"
        enterKeyHint="send"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <span className="absolute left-3 top-[13px]">
        <VscSearch className="h-[18px] w-[18px] text-white" />
      </span>
    </div>
  );
};

export default MainSearchInput;
