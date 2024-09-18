import Header from '@/components/layout/Header';
import BottomNavigation from '@/components/layout/BottomNavigation';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <BottomNavigation />
    </>
  );
}
