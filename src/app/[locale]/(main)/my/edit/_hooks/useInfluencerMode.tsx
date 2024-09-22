'use client';
import { useState } from 'react';

const useInfluencerMode = (initialActive: boolean) => {
  const [isInfluencerModeActive, setIsInfluencerModeActive] = useState<boolean>(initialActive);
  const handleChangeInfluencerMode = (checked: boolean) => {
    // 인플루언서 모드 변경사항 저장 로직 추가
    setIsInfluencerModeActive(checked);
  };
  return { isInfluencerModeActive, handleChangeInfluencerMode };
};

export default useInfluencerMode;
