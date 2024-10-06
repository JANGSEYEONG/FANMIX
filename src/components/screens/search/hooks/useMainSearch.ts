import { debounce } from 'lodash';

import { useState, useCallback, useMemo, useEffect } from 'react';

import { removeAllWhitespace } from '@/lib/text';

export const useMainSearch = (debounceTime: number = 300) => {
  const [searchTerm, setSearchTerm] = useState(''); // 검색제안 - 바로가기 문구 변경에 사용
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  const debouncedSetSearchTerm = useMemo(
    () =>
      debounce((term: string) => {
        const trimmedSearchTerm = removeAllWhitespace(term).toLowerCase();
        setDebouncedSearchTerm(trimmedSearchTerm);
      }, debounceTime),
    [debounceTime],
  );

  // searchTerm이 바뀌면 debouncedSearchTerm 변경 (debounceTime만큼 디바운스)
  useEffect(() => {
    debouncedSetSearchTerm(searchTerm);

    // 컴포넌트가 언마운트되거나 searchTerm이 변경될 때 디바운스 취소
    return () => {
      debouncedSetSearchTerm.cancel();
    };
  }, [searchTerm, debouncedSetSearchTerm]);

  const handleSearch = useCallback((newTerm: string) => {
    setSearchTerm(newTerm);
  }, []);

  return { searchTerm, debouncedSearchTerm, handleSearch };
};
