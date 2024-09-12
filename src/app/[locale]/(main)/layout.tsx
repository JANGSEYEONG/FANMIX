import Header from '@/components/layout/Header';
import BottomNavigation from '@/components/layout/BottomNavigation';
import ModalPortal from '@/components/layout/ModalPortal';
import { Toaster } from '@/components/ui/toaster';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <BottomNavigation />
      <ModalPortal />
      <Toaster />
    </>
  );
}
