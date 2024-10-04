import { useMemo } from 'react';
import { useUserStore } from '@/stores/userStore';
import { useTranslations } from 'next-intl';
import { NATIONALITY_KEYS } from '@/constants/nationality';
import {
  useUpdateMyBirthYear,
  useUpdateMyGender,
  useUpdateMyIntroduce,
  useUpdateMyNationality,
  useUpdateMyNickname,
} from '@/hooks/queries/useUserService';

import type { Gender } from '@/types/domain/userType';

type FieldOption = { value: string; label: string };
type TextField = {
  label: string;
  value: string;
  placeholder: string;
  updateFn: (value: string) => void;
};
type SelectField = {
  label: string;
  defaultValue: string;
  placeholder: string;
  options: FieldOption[];
  updateFn: (value: string) => void;
};

export const useMySettingsPanel = () => {
  const t = useTranslations('my_page_edit_page');
  const tNationalities = useTranslations('nationalities');
  const user = useUserStore((state) => state.user);

  const startYear = 1900;
  const currentYear = new Date().getFullYear();

  // 1900~올해 년도의 숫자 배열
  const birthYearOptions = useMemo(
    (): FieldOption[] =>
      Array.from({ length: currentYear - startYear + 1 }, (_, index) => {
        const year = (currentYear - index).toString();
        return { value: year, label: year };
      }),
    [startYear, currentYear],
  );

  // 국가 상수에서 뽑아낸 나라 배열
  const nationalityOptions = useMemo(
    (): FieldOption[] =>
      NATIONALITY_KEYS.map((nationalityKey) => ({
        value: nationalityKey,
        label: tNationalities(nationalityKey),
      })),
    [tNationalities],
  );

  const nicknameMutation = useUpdateMyNickname();
  const introduceMutation = useUpdateMyIntroduce();
  const genderMutation = useUpdateMyGender();
  const birthYearMutation = useUpdateMyBirthYear();
  const nationalityMutation = useUpdateMyNationality();

  const textFields: TextField[] = [
    {
      label: t('닉네임'),
      value: user?.nickName || '',
      placeholder: t('{label}을(를) 입력해주세요', { label: t('닉네임') }),
      updateFn: (newNickName: string) => nicknameMutation.mutate({ nickName: newNickName }),
    },
    {
      label: t('내 소개'),
      value: user?.introduce || '',
      placeholder: t('{label}을(를) 입력해주세요', { label: t('내 소개') }),
      updateFn: (newIntroduce: string) => introduceMutation.mutate({ introduce: newIntroduce }),
    },
  ];

  const selectFields: SelectField[] = [
    {
      label: t('성별'),
      defaultValue: user?.gender || '',
      placeholder: t('{label}을(를) 선택해주세요', { label: t('성별') }),
      options: [
        { value: 'FEMALE', label: t('여자') },
        { value: 'MALE', label: t('남자') },
        { value: 'UNKNOWN', label: t('알 수 없음') },
      ],
      updateFn: (newGender: string) => genderMutation.mutate({ gender: newGender as Gender }),
    },
    {
      label: t('출생 연도'),
      defaultValue: user?.birthYear ? user.birthYear.toString() : '',
      placeholder: t('{label}을(를) 선택해주세요', { label: t('출생 연도') }),
      options: birthYearOptions,
      updateFn: (newBirthYear: string) =>
        birthYearMutation.mutate({ birthYear: parseInt(newBirthYear) }),
    },
    {
      label: t('국적'),
      defaultValue: user?.nationality || '',
      placeholder: t('{label}을(를) 선택해주세요', { label: t('국적') }),
      options: nationalityOptions,
      updateFn: (newNationality: string) =>
        nationalityMutation.mutate({ nationality: newNationality }),
    },
  ];

  const isLoading =
    nicknameMutation.isPending ||
    introduceMutation.isPending ||
    genderMutation.isPending ||
    birthYearMutation.isPending ||
    nationalityMutation.isPending;

  return {
    user,
    textFields,
    selectFields,
    isLoading,
  };
};
