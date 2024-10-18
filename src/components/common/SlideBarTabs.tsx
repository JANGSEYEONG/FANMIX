'use client';

// import { Loader2 } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

interface SlideBarTabsProps {
  tabs: { value: string; label: string; content: React.ReactNode }[];
  defaultValue: string;
}

// Active 탭 하단을 따라다니는 슬라이드가 있는 탭
const SlideBarTabs = ({ tabs, defaultValue }: SlideBarTabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const [sliderStyle, setSliderStyle] = useState({});
  // const [isSliderLoading, setIsSliderLoading] = useState(true); // 슬라이드가 위치 찾을 때 까지 스피너 표시
  const tabsListRef = useRef<HTMLDivElement>(null);

  const updateSliderStyle = useCallback(() => {
    // shadcn/ui는 Radix UI를 기반으로 하며, Radix UI에서는 현재 활성화된 탭에 'data-state="active"' 속성을 부여
    // -> `active`로 슬라이더 위치 구할 탭 찾기
    const activeElement = tabsListRef.current?.querySelector(
      `[data-state="active"]`,
    ) as HTMLElement;

    if (activeElement) {
      // 활성 탭의 위치와 너비를 기반으로 슬라이더 스타일을 업데이트
      setSliderStyle({
        left: `${activeElement.offsetLeft}px`,
        width: `${activeElement.offsetWidth}px`,
        transition: 'all 0.3s ease',
      });
    }
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      updateSliderStyle();
    }, 0);

    window.addEventListener('resize', updateSliderStyle);
    // setIsSliderLoading(false);
    return () => {
      clearTimeout(timerId);
      window.removeEventListener('resize', updateSliderStyle);
    };
  }, [activeTab, updateSliderStyle]);

  return (
    <Tabs defaultValue={defaultValue} className="h-full w-full" onValueChange={setActiveTab}>
      <TabsList className="relative w-full flex-center" ref={tabsListRef}>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} className="flex-1" value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
        <div className="absolute bottom-[-1.4px] h-0.5 bg-orange-500" style={sliderStyle} />
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="h-full">
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default SlideBarTabs;
