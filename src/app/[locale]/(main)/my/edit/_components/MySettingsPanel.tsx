'use client';

import { Switch } from '@/components/ui/switch';

import { useTranslations } from 'next-intl';
import { useMySettingsPanel } from '../_hooks/useUpdateSettingPanel';

import TextField from './TextField';
import SelectField from './SelectField';

import PageSpinner from '@/components/common/spinner/PageSpinner';
import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';

const MySettingsPanel = () => {
  const t = useTranslations('my_page_edit_page');
  const { user, textFields, selectFields, isLoading } = useMySettingsPanel();

  if (!user) {
    return <ComponentSpinner />;
  }

  return (
    <div>
      <ul aria-label="사용자 기본 정보" className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-6">
        {textFields.map((textField) => (
          <li key={textField.label} className="contents">
            <label className="flex pt-2 text-neutral-200 body3-m">{textField.label}</label>
            <TextField {...textField} />
          </li>
        ))}
        {selectFields.map((selectField) => (
          <li key={selectField.label} className="contents">
            <div className="flex pt-2 text-neutral-200 body3-m">{selectField.label}</div>
            <SelectField {...selectField} />
          </li>
        ))}
      </ul>
      <div aria-label="인플루언서 모드" className="my-[42px] flex items-center justify-between">
        <label htmlFor="influencer-mode" className="text-neutral-200 body3-m">
          {t('인플루언서 모드')}
        </label>
        <div className="gap-2.5 flex-center">
          <span className="text-neutral-200 body3-sb">OFF</span>
          <Switch id="influencer-mode" disabled />
        </div>
      </div>
      {isLoading && <PageSpinner />}
    </div>
  );
};

export default MySettingsPanel;
