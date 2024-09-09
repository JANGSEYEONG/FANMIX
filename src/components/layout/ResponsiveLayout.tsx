import Header from './Header';
import BottomNavigation from './BottomNavigation';

interface ResponsiveLayoutProps {
  children: React.ReactNode;
}

const ResponsiveLayout = ({ children }: ResponsiveLayoutProps) => {
  return (
    <div className="h-screen w-screen bg-slate-900 flex-center">
      <div className="relative h-screen max-h-[900px] w-screen overflow-hidden rounded-md border border-slate-600 bg-black text-white flex-col-center sm:w-[393px]">
        <Header />
        {children}
        <BottomNavigation />
      </div>
    </div>
  );
};
export default ResponsiveLayout;
