interface ResponsiveLayoutProps {
  children: React.ReactNode;
}

const ResponsiveLayout = ({ children }: ResponsiveLayoutProps) => {
  return (
    <div className="h-dvh w-screen overflow-hidden bg-slate-900 flex-center">
      <div className="relative flex h-full max-h-[900px] w-full flex-col overflow-hidden bg-black text-white sm:w-[393px]">
        {children}
      </div>
    </div>
  );
};

export default ResponsiveLayout;
