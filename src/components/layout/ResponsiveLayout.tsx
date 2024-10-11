import { Toaster } from '../ui/toaster';
import ModalPortal from './ModalPortal';

interface ResponsiveLayoutProps {
  children: React.ReactNode;
}

// 모바일 크기 + 높이/너비 반응형 layout
const ResponsiveLayout = ({ children }: ResponsiveLayoutProps) => {
  return (
    <div className="h-dvh w-screen overflow-hidden flex-center layout-background-image">
      <div className="relative h-full max-h-[900px] w-full overflow-hidden bg-black text-white md:w-[393px]">
        {children}
        <ModalPortal />
        <Toaster />
      </div>
    </div>
  );
};

export default ResponsiveLayout;
