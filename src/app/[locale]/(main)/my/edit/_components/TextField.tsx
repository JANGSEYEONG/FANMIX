import { cn } from '@/lib/utils';
import { useInformationToast } from '@/hooks/useInformationToast';
import { useTranslations } from 'next-intl';

interface TextFieldProps {
  label: string;
  value: string;
  placeholder: string;
  updateFn: (newValue: string) => void;
}

const TextField = ({ label, value, placeholder, updateFn }: TextFieldProps) => {
  const t = useTranslations('my_page_edit_page');
  const { showErrorToast } = useInformationToast();
  const trimmedValue = value.toString().trim();
  const handleClickTextField = () => {
    const newValue = prompt(t('새로운 {label}을(를) 입력해주세요', { label }), trimmedValue);
    if (newValue === null) return; // 취소 버튼 클릭
    if (newValue && newValue.trim() && newValue !== value) {
      // 새로운 값이 입력되었고, 기존 값과 다를 때
      updateFn(newValue);
    } else {
      // 값이 비어있거나 기존 값과 같을 때
      showErrorToast(t('올바른 값을 입력해주세요'));
    }
  };
  return (
    <div
      className={cn(
        'min-h-9 cursor-pointer bg-neutral-800 px-3 py-2.5 body3-r',
        !trimmedValue && 'text-white/40',
      )}
      onClick={handleClickTextField}>
      {trimmedValue || placeholder}
    </div>
  );
};
export default TextField;
