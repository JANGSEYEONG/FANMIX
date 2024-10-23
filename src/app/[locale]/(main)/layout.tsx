'use client';

import { useRef } from 'react';

import Header from '@/components/layout/Header';
import BottomContainer from '@/components/layout/BottomContainer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const mainRef = useRef<HTMLElement>(null);
  return (
    <>
      <Header />
      <main className="h-full w-full page-scrollable-container" ref={mainRef}>
        {children}
      </main>
      <BottomContainer mainRef={mainRef} />
    </>
  );
}
