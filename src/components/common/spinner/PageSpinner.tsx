const PageSpinner = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-black/80 flex-center">
      <div className="box-border inline-block h-12 w-12 animate-spin rounded-full border-[5px] border-orange-600 border-b-transparent"></div>
    </div>
  );
};

export default PageSpinner;
